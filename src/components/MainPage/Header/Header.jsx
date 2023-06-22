import React, { useEffect } from "react";
import './Header.css';
import logo from './WLogo.svg';
import { Link } from "react-router-dom";
import OAuth2 from "../../../Oauth/OAuth2";
import { OAuthContextProvider, useOAuth } from "../../../OAuthProvider/OAuthProvider";

const Header = () => {

    const oauth = useOAuth().oauth;

    let url;

    if(oauth.accessToken != null && oauth.createdAt + oauth.expiresIn <= Date.now()){
        useEffect(() => {oauth.refreshTokenRequest().then(() => {
            OAuthContextProvider.setOauthContext(oauth)
        })},[]);

        url = "/dashboard";
    }
    else{
        url = oauth.GetRedirectURL();
    }

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

            <Link to={url} className='DashboardBtn'>
                DashBoard
            </Link>
        </header>
    );
}

export default Header;