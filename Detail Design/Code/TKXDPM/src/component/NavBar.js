/**
 * @author Chien Nobi
 */


import React from 'react'
import logo from '../assets/logo.jpg';
import { Link, Switch, Route } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar flex items-center">
            <div className="navbar-left flex items-center">
                <img src={ logo } alt="logo" className="bd-circle logo" />
                <Link to="/">NobBike</Link>
                <form>
                    <input type="text" name="search-value" className="form-input" placeholder="Search here" />
                </form>
            </div>
            <div className="navbar-right flex items-center">
                <div className="user-infor flex items-center">
                    <img src={ logo } alt="logo" className="bd-circle user-infor__avt" />
                    <p className="user-infor__name">Chiến Nobi</p>
                </div>
                <div className="navigation flex items-center">
                    <Link to="/docking" className="nav-link">Bãi xe</Link>
                    <Link to="/docking" className="nav-link">Thuê xe</Link>
                    <Link to="/" className="nav-link">Liên hệ</Link>
                </div>
            </div>
        </div>


    );
}

export default NavBar;