import React, { useEffect, useState, useCallback } from 'react';
import { getAvailableStation } from '../../api/station.api';
import { getBike } from '../../api/bike.api';
import { useParams } from 'react-router-dom';
import {
    bikeImage
} from "../../image";

import { payingCommand, resetBalance } from '../../api/transaction.api';
import { addTransaction, updateTransaction } from '../../api/local.api';
import { caculatorHiringFeeBike, caculatorHiringFeeEBike } from './logic';
import useLoader from '../../hooks/useLoader';
import Timer from './Timer';
import Invoice from './Invoice';
import StationItem from './StationItem';


var transactionInfor = {
    username: "Trần Thế Chiến",
    timeInterBankAPI: '',
    createdAt: '',
    endAt: '',
    transactionId: 0,
    interbankTransactionIdStart: '',
    interbankTransactionIdEnd: '',
    fee: 0,
    bikeId: '',
    stationId: '',
    stationName: ''
}
const HiringBike = (props) => {
    let { bikeId } = useParams();
    transactionInfor.bikeId = bikeId;
    const [isRented, setIsRented] = useState(false);
    const [showDockingList, setShowDockingList] = useState(false);
    const [bike, setBike] = useState();
    const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
    const [stationList, setStationList] = useState([]);
    const [interv, setInterv] = useState('');
    let updateS = time.s, updateM = time.m, updateH = time.h;
    const [isFinish, setIsFinish] = useState(false);
    const [loader, showLoader, hideLoader] = useLoader();
    useEffect(() => {
        return () => clearInterval(interv);
    }, []);

    useEffect(() => {
        getBikeFromApi();
        getAvailStationFromApi();
    }, []);

    const getBikeFromApi = useCallback(async () => {
        const queryResult = await getBike(bikeId);
        setBike(queryResult);
    }, [bikeId]);

    const getAvailStationFromApi = useCallback(async () => {
        const queryResult = await getAvailableStation();
        setStationList(queryResult);
    }, []);

    const runTimer = () => {
        let interval = setInterval(() => {
            if (updateS === 60) {
                updateM++;
                updateS = 0;
            }
            if (updateM === 60) {
                updateH++;
                updateM = 0;
            }
            updateS++;
            setTime({ s: updateS, m: updateM, h: updateH });
        }, 1000);
        return interval;
    }

    const hiringBike = () => {
        showLoader();
        const timeNow = new Date();
        transactionInfor.createdAt = Date.now();
        // const timeInterBankAPI = timeNow.toLocaleDateString('en-CA') + ' ' + timeNow.toLocaleTimeString('ja-JP');
        transactionInfor.timeInterBankAPI = timeNow.toLocaleDateString('en-CA') + ' ' + timeNow.toLocaleTimeString('ja-JP');
        let body = {
            createdAt: Date.now(),
            userId: 1,
            bikeId: bikeId,
            deposite: bike.bikeDeposit,
        }
        addTransaction(body).then((result) => {
            console.log(result.data);
            if (result.status === 200) {
                transactionInfor.transactionId = result.data.data.insertId;
            }
        }).then(async () => {
            const kq = await getTransactionInfor("pay", bike.bikeDeposit);
            transactionInfor.interbankTransactionIdStart = kq;
            hideLoader();
            setIsRented(true);
            setInterv(runTimer());
        });
    }

    const returnBike = () => {
        showLoader();
        const hiringTime = transactionInfor.endAt - transactionInfor.createdAt;
        var bikeDeposit = bike.bikeDeposit;
        console.log(bike.bikeType);
        if (bike.bikeType == 10) {
            transactionInfor.fee = caculatorHiringFeeBike(hiringTime / 60000);
        }
        else transactionInfor.fee = caculatorHiringFeeEBike(hiringTime / 60000);
        if (transactionInfor.fee < bikeDeposit) {
            getTransactionInfor("refund", bikeDeposit - transactionInfor.fee).then((result) => {
                transactionInfor.interbankTransactionIdEnd = result;
                console.log(transactionInfor);
            }).then(() => {
                updateTransaction(transactionInfor).then(result => {
                    console.log("Update done");
                }).then(() => {
                    const localTransaction = JSON.stringify(transactionInfor);
                    localStorage.setItem('transactionResult', localTransaction);
                    hideLoader();
                    window.location.href = "/transaction";
                })
            })
        }
        else {
            getTransactionInfor("pay", transactionInfor.fee - bikeDeposit).then((result) => {
                transactionInfor.interbankTransactionIdEnd = result;
                console.log(transactionInfor);
            }).then(() => {
                updateTransaction(transactionInfor)
                    .then(console.log("update done"))
                    .then(() => {
                        const localTransaction = JSON.stringify(transactionInfor);
                        localStorage.setItem('transactionResult', localTransaction);
                        hideLoader();
                    });
            })
        }

    }


    const getStationData = (selectStaId, selectStaName) => {
        transactionInfor.stationName = selectStaName;
        transactionInfor.stationId = selectStaId;
        setIsFinish(true);
    }

    const showStation = () => {
        transactionInfor.endAt = Date.now();
        setShowDockingList(true);
        clearInterval(interv);
    }

    const getTransactionInfor = async (command, amount) => {
        try {
            const requestResult = await payingCommand(command, amount, transactionInfor.timeInterBankAPI, "paying for hiring bike")
            if (requestResult.data.errorCode === "00") {
                console.log("Paying or refund successfully");
                return requestResult.data.transaction.transactionId;
            }
        } catch (err) {
            console.log(err);
        }

    }


    if (bike !== undefined) {
        return (
            <div className="station-container hiring-container">
                { loader }
                <div className="top flex">
                    <div className="hiring-infor top-items">
                        <p>Thông tin chi tiết</p>
                        <div className="flex infor-media">
                            <div className="text">
                                <p>Loại xe: { bike.name }</p>
                                <p>Mã xe: { bike.bikeCode }</p>
                                <p>Vị trí: { bike.position }</p>
                                { bike.battery !== -1 ? <p>Pin còn lại: { bike.battery }%</p> : null }
                                <p>Tiền đặt cọc: <b>{ bike.bikeDeposit.toLocaleString('en-US', { style: 'currency', currency: 'VND' }) }</b></p>
                            </div>
                            <div className="image">
                                <img src={ bikeImage } alt="bike" />
                            </div>

                        </div>
                        {
                            !isRented ?
                                <button className="btn confirm-btn" onClick={ hiringBike }>Thuê xe</button>
                                : null
                        }
                    </div>
                    {
                        isFinish ? <Invoice bike={ bike } transaction={ transactionInfor } returnBike={ returnBike } /> : null
                    }
                    <Timer isRented={ isRented } time={ time } returnBike={ showStation } />


                </div>
                {
                    showDockingList ?
                        <div className="bottom">
                            <div className="bottom-header">Chọn bãi xe muốn trả</div>
                            <div className="choose-station list-station flex">
                                { stationList.map((item) =>
                                    <StationItem station={ item } key={ item.id } getStationData={ (selectStaId, selectStaName) => getStationData(selectStaId, selectStaName) } />
                                ) }
                            </div>
                        </div> : null
                }
            </div>
        )
    }
    else return null;
}



export default HiringBike;
