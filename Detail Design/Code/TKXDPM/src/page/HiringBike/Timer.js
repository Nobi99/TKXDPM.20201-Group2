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

export default Timer;