
import React from 'react';

import {
    errorIcon
} from '../image';
const TransactionResult = () => {
    if (localStorage.length !== 0) {
        var transaction = JSON.parse(localStorage.getItem('transactionResult'));
        console.log(transaction);

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
    else return null;
}
const Success = ({ transaction }) => {
    return (
        <div className="transaction-result">
            <p className="transaction-result-header">
                Giao dịch thành công!!
        </p>
            <div className="transaction-result-body">
                <div className="transaction-items">
                    <p><span>Tên khách hàng: </span>{ transaction.username }</p>
                    <p><span>Mã hóa đơn: </span>NB0100</p>
                    <p><span>Xe đã sử dụng: </span>{ transaction.bikeId }</p>
                    <p><span>Tổng thời gian thuê: </span>45p </p>
                    <p><span>Tiền thuê xe: </span>{ transaction.fee.toLocaleString('en-US', { style: 'currency', currency: 'VND' }) }</p>
                </div>
                <p className="thank-sentence">Cảm ơn quý khách đã sử dụng dịch vụ của NobBike.</p>
            </div>

        </div>
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