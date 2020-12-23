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
    stationName: '',
    hiringFee: 0
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



    /**
     * Get bike what the user choose in previous step by calling the API
     */
    const getBikeFromApi = useCallback(async () => {
        const queryResult = await getBike(bikeId);
        setBike(queryResult);
    }, [bikeId]);

    /**
     * Get all stations from API what have empty slots to return bike 
     */

    const getAvailStationFromApi = useCallback(async () => {
        const queryResult = await getAvailableStation();
        setStationList(queryResult);
    }, []);

    /**
     * Function to run time 
     */

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

    /**
     * Paying the deposite and start the timer
     */
    const hiringBike = () => {
        showLoader();
        const timeNow = new Date();
        transactionInfor.createdAt = Date.now();
        transactionInfor.timeInterBankAPI = timeNow.toLocaleDateString('en-CA') + ' ' + timeNow.toLocaleTimeString('ja-JP');
        let body = {
            createdAt: transactionInfor.createdAt,
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

    /**
     * When user confirm invoice, function will run and process to return bike
     */
    const returnBike = () => {
        // show loading icon
        showLoader();
        // caculating hiring time
        const hiringTime = transactionInfor.endAt - transactionInfor.createdAt;
        var bikeDeposit = bike.bikeDeposit;
        // bike type == 10 ~ single bikecycle 
        if (bike.bikeType == 10) {
            transactionInfor.fee = caculatorHiringFeeBike(hiringTime / 60000);
        }
        else transactionInfor.fee = caculatorHiringFeeEBike(hiringTime / 60000);

        /**
         * Determining call refund method or paying method
         * After that if success -> update the transaction to db and redirect to the success page
         */
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

    /**
     * Show Confirmation and get Station data to return bike
     * @param {*} selectStaId 
     * @param {*} selectStaName 
     */
    const getStationData = (selectStaId, selectStaName) => {
        transactionInfor.stationName = selectStaName;
        transactionInfor.stationId = selectStaId;
        setIsFinish(true);
    }

    /**
     * Show Station List to choose
     */
    const showStation = () => {
        transactionInfor.endAt = Date.now();
        transactionInfor.hiringFee =
            setShowDockingList(true);
        clearInterval(interv);
    }

    /**
     * Create Data and send Request to Interbank 
     * @param {String} command "paying" or "refund"
     * @param {Number} amount 
     * @returns {Number} interbank transaction Id
     */

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
