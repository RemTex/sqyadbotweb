import React, { useEffect } from "react";
import './Header.css';
import logo from './WLogo.svg';
import { Link } from "react-router-dom";
import OAuth2 from "../../../Oauth/OAuth2";
import { useOAuth } from "../../../OAuthProvider/OAuthProvider";

const Header = () => {

    const oauth = useOAuth().oauth;

    let url;

    if(oauth.accessToken != null){
        useEffect(() => {oauth.refreshTokenRequest().then(() => {
            localStorage.setItem('authenticated_user', JSON.stringify(oauth));
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
                
                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/servers">Servers</Link>

            </div>

            <Link to={url} className='DashboardBtn'>
                DashBoard
            </Link>
        </header>
    );
}

export default Header;