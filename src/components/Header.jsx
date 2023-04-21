import React from "react";
import './Header.css';
import logo from './img/WLogo.svg';

const Header = () => {
    return (
        <header>
            <img className="image_fit" src={logo}></img>

            <div className="NavBar">
                <a>Home</a>
                <a>About</a>
                <a>Servers</a>
            </div>

            <button className="DashboardBtn">Dashboard</button>
        </header>
    );
}

export default Header;