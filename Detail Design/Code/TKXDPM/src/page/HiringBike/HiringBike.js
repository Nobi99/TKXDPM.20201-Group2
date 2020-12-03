import React, { useEffect, useState, useCallback } from 'react';
import { getAvailableStation } from '../../api/station.api';
import { getBike } from '../../api/bike.api';
import { useParams } from 'react-router-dom';
import {
    addressIcon,
    distanceIcon,
    emptySlotIcon,
    bikeIcon,
    areaIcon,
    bikeImage
} from "../../image";

import { payingCommand, resetBalance } from '../../api/transaction.api';
import { addTransaction, updateTransaction } from '../../api/local.api';
import { caculatorHiringFeeBike, caculatorHiringFeeEBike } from './caculator';


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
    useEffect(() => {
        return () => clearInterval(interv);
    }, []);


    // resetBalance();

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

    const hiringBike = () => {
        const timeNow = new Date();
        transactionInfor.createdAt = Date.now();
        const timeInterBankAPI = timeNow.toLocaleDateString('en-CA') + ' ' + timeNow.toLocaleTimeString('ja-JP');
        transactionInfor.timeInterBankAPI = timeInterBankAPI;
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
            setIsRented(true);
            setInterv(runTimer());
        });
    }

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


    const returnBike = () => {
        setShowDockingList(true);
        clearInterval(interv);
        const endAt = Date.now();
        transactionInfor.endAt = endAt;
        const hiringTime = endAt - transactionInfor.createdAt;
        var fee = '';
        var bikeDeposit = bike.bikeDeposit;
        console.log(bike.bikeType);
        if (bike.bikeType == 10) {
            fee = caculatorHiringFeeBike(hiringTime / 60000);
        }
        else fee = caculatorHiringFeeEBike(hiringTime / 60000);
        transactionInfor.fee = fee;
        if (fee < bikeDeposit) {
            getTransactionInfor("refund", bikeDeposit - fee).then((result) => {
                transactionInfor.interbankTransactionIdEnd = result;
                console.log(transactionInfor);
            }).then(() => {
                updateTransaction(transactionInfor).then(result => {
                    console.log("Update done");
                }).then(() => {
                    const localTransaction = JSON.stringify(transactionInfor);
                    localStorage.setItem('transactionResult', localTransaction);
                    window.location.href = "/transaction";
                })
            })
        }
        else {
            getTransactionInfor("pay", fee - bikeDeposit).then((result) => {
                transactionInfor.interbankTransactionIdEnd = result;
                console.log(transactionInfor);
            }).then(() => {
                updateTransaction(transactionInfor)
                    .then(console.log("update done"))
                    .then(() => {
                        const localTransaction = JSON.stringify(transactionInfor);
                        localStorage.setItem('transactionResult', localTransaction);
                    });
            })
        }

    }

    console.log("rendering....");

    const getStationData = (selectStaId, selectStaName) => {
        transactionInfor.stationName = selectStaName;
        transactionInfor.stationId = selectStaId;
        setIsFinish(true);
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
                        isFinish ? <Invoice bike={ bike } transaction={ transactionInfor } /> : null
                    }
                    <Timer isRented={ isRented } time={ time } returnBike={ returnBike } />


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

const ConfirmPayment = () => {
    <div className="confirm-payment">
        <p className="confirm-payment-header">
            Xác nhận thanh toán
        </p>
    </div>
}

const StationItem = ({ station, getStationData }) => {
    return (
        <div className="station-item">
            <h5>{ station.name }</h5>
            <div className="item-attr">
                <img src={ addressIcon } alt="address icon" />
                <p>{ station.address } </p>
            </div>
            <div className="item-attr">
                <img src={ distanceIcon } alt="distance icon" />
                <p>{ station.distance } m </p>
            </div>
            <div className="item-attr">
                <img src={ areaIcon } alt="area icon" />
                <p>{ station.area } m<sup>2</sup> </p>
            </div>
            <div className="item-attr">
                <img src={ bikeIcon } alt="bike icon" />
                <p>{ station.bikeNumber } </p>
            </div>
            <div className="item-attr">
                <img src={ emptySlotIcon } alt="empty icon" />
                <p>{ station.emptySlot } </p>
            </div>
            <div className="btn btn-select" onClick={ () => getStationData(station.id, station.name) }>Chọn</div>
        </div>
    )
}

const Invoice = (props) => {
    const { bike, transaction } = props;
    let startTime = new Date(transaction.createdAt).toLocaleString('ja-JP');
    let endTime = new Date(transaction.endAt).toLocaleString('ja-JP');
    let hiringTime = (transaction.endAt - transaction.createdAt) / 1000;
    console.log(transaction);
    return (
        <div className="invoice-background">
            <div className="invoice top-items popup">
                <p>Invoice</p>
                <div className="flex infor-media">
                    <div className="text">
                        <p>Tên khách hàng: Trần Thế Chiến</p>
                        <p>Start time: { startTime }</p>
                        <p>End time: { endTime }</p>
                        <p>Hiring time: { hiringTime }</p>
                        <p>Tiền thuê xe: { transaction.fee }</p>
                        <p>Tiền đặt cọc: { bike.bikeDeposit.toLocaleString('en-US', { style: 'currency', currency: 'VND' }) }</p>
                        <p>Tiền hoàn trả: { -transaction.fee + bike.bikeDeposit } </p>
                        <p>Bãi xe đã trả xe: { transaction.stationName }</p>
                    </div>

                </div>
                <button className="btn confirm-btn">Xác nhận</button>
            </div>
        </div>
    )

}

const Timer = ({ isRented, time, returnBike }) => {
    return (
        <>
            {
                isRented ?
                    <div className="invoice top-items">
                        <p> Timer</p>
                        <div className="timer flex">
                            <div>
                                <span>{ time.h < 10 ? 0 : null }{ time.h }</span>
                                <span>{ time.m < 10 ? 0 : null }{ time.m }</span>
                                <span>{ time.s < 10 ? 0 : null }{ time.s }</span>
                            </div>

                        </div>
                        <button className="btn confirm-btn" onClick={ returnBike }>Trả xe</button>
                    </div > : null

            }
        </>
    )
}

export default HiringBike;
