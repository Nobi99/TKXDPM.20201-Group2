
import React, { useEffect } from 'react';
import NotFound from '../component/NotFound'
import { Link } from 'react-router-dom';

import {
    errorIcon
} from '../image';
const TransactionResult = () => {


    useEffect(() => {
        return localStorage.removeItem('transactionResult');
    })


    var transaction = JSON.parse(localStorage.getItem('transactionResult'));
    if (transaction !== null) {
        return (
            <div className="station-container">
                {/* {
                        transaction.statusCode ? <Success /> : <Error />
                    }
                    <div className="return-home">
                        {
                            transaction.statusCode ?
                                <button className="btn-return btn">Home</button>
                                : <button className="btn-return btn">Try again</button>
                        }
        
                    </div> */}
                <Success transaction={ transaction } />
            </div>
        )
    }
    else return <NotFound />;
}
const Success = ({ transaction }) => {
    console.log(transaction);
    return (
        <>
            <div className="transaction-result">
                <p className="transaction-result-header">
                    Giao dịch thành công!!
            </p>
                <div className="transaction-result-body">
                    <div className="transaction-items">
                        <p><span>Tên khách hàng: </span>{ transaction.username }</p>
                        <p><span>Tổng thời gian thuê: </span>{ transaction.hiringTime.h }h { transaction.hiringTime.m }p </p>
                        <p><span>Tiền thuê xe: </span>{ transaction.fee.toLocaleString('en-US', { style: 'currency', currency: 'VND' }) }</p>
                    </div>
                    <p className="thank-sentence">Cảm ơn quý khách đã sử dụng dịch vụ của NobBike.</p>
                </div>
            </div>
            <Link to="/" className="btn-return btn">Home</Link>
        </>
    )
}

const Error = () => {
    return (
        <div className="transaction-result error">
            <p className="transaction-result-header">
                Giao dịch thất bại...
            </p>
            <div className="transaction-result-body flex items-center">
                <img src={ errorIcon } alt="error" />
                <p>Tài khoản không đủ số dư</p>
            </div>

        </div>
    )
}
export default TransactionResult;