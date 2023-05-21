import React from "react";
import './Header.css';
import logo from './WLogo.svg';
import DashBoard from "../../DashBoard/DashBoard";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>

            <Link to="/">
                <img className="logo_image_fit" src={logo}/>    
            </Link>

            <div className="NavBar">
                
                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/servers">Servers</Link>

            </div>
                
            <Link to="dashboard" className='DashboardBtn'>
                DashBoard
            </Link>
        </header>
    );
}

export default Header;