import React from 'react';
import './UserContainer.css';
import ExitElement from './ExitElem.svg';
import UserImage from './UserImage.svg';
import axios from "axios";

const code1 = window.location.href.replace('http://localhost:3000/dashboard?code=', '')



const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2({
    clientId: "1030561734840307803",
    clientSecret: "uJ0oHD9E1-_rgRBE5IrbSuq73OfdQO7H",
    redirectUri: "http://localhost:3000/dashboard",
});



console.log(code1)


// oauth.tokenRequest({
// 	clientId: "1030561734840307803",
// 	clientSecret: "uJ0oHD9E1-_rgRBE5IrbSuq73OfdQO7H",

// 	code: code1,
//  grantType: 'authorization_code',
// 	scope: "identify",

// 	redirectUri: "http://localhost:3000/dashboard",
// }).then(console.log)


const UserContainer = () => {
    return (
        <div id='container'>
            <div className='user_name'>
                <img src={UserImage}>
                    {/* <img src={user.avatar}/> */}
                </img>
                <div className='user_id'>
                    <h1>
                        <span>
                            {/* ${user.username} */}
                        </span>
                    </h1>
                </div>
            </div>
            <a className='exit' href='/'>
                <img src={ExitElement}/>
            </a>
        </div>
    )
}

export default UserContainer;