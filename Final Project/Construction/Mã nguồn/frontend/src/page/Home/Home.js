import React, { useEffect, useState } from 'react';
import backgroundImg from '../../assets/background2.jpg';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="home flex items-center" style={ {
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        } }>
            <div className="home-right">
                <h2>EcoBikeRental</h2>
                <div className="infor">
                    <p>Thuê xe dễ dàng với QR code.</p>
                    <p>Thanh toán tiện lợi.</p>
                    <p>Trả xe bất kì lúc nào.</p>
                    <p>Miễn phí trải nghiệm 10p đầu.</p>
                </div>
                <Link to="/docking" className="btn rent-bike">Thuê xe ngay</Link>
            </div>
            <div className="home-left" style={ {

            } }>

            </div>
        </div >
    )
}

export default Home;