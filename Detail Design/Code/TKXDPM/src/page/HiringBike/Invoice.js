const Invoice = (props) => {
    const { bike, transaction, returnBike } = props;
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
                <button className="btn confirm-btn" onClick={ returnBike }>Xác nhận</button>
            </div>
        </div>
    )

}

export default Invoice;