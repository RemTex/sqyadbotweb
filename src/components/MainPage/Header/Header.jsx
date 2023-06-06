import React from "react";
import './Header.css';
import logo from './WLogo.svg';
import DashBoard from "../../DashBoard/DashBoard";
import { Link } from "react-router-dom";
import OAuth2 from "../../../Oauth/OAuth2";

const oauth = new OAuth2({
    clientId: "1030561734840307803",
    clientSecret: "uJ0oHD9E1-_rgRBE5IrbSuq73OfdQO7H",
    redirectUri: "http://localhost:3000/dashboard",
});

const Header = () => {

    
    const url = oauth.GetRedirectURL();

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
                
            <a href={url} className='DashboardBtn'>
                DashBoard
            </a>
        </header>
    );
}

export default Header;