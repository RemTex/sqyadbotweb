import React from "react";
import './Header.css';
import logo from './img/WLogo.svg';

const Header = () => {
    return (
        <div className="Header">
            <img className="image_fit" src={logo}></img>

            <div className="NavBar">
                <a>Home</a>
                <a>About</a>
                <a>Servers</a>
            </div>

            <button className="DashboardBtn">Dashboard</button>
        </div>
    );
}

export default Header;