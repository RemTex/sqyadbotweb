import React, { useEffect } from "react";
import './Header.css';
import logo from './WLogo.svg';
import { Link } from "react-router-dom";
import OAuth2 from "../../../Oauth/OAuth2";
import { useOAuth } from "../../../OAuthProvider/OAuthProvider";

const Header = () => {

    const oauth = useOAuth().oauth

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