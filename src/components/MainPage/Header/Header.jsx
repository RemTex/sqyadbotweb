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
                
                <Link to="/">Главная</Link>

                <Link to="/about">О нас</Link>

                <Link to="/servers">Сервера</Link>

            </div>
                
            <a href={url} className='DashboardBtn'>
                DashBoard
            </a>
        </header>
    );
}

export default Header;