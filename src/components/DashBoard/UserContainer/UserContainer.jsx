import React from 'react';
import './UserContainer.css';
import ExitElement from './ExitElem.svg';
import UserImage from './UserImage.svg';
import axios from "axios";
import OAuth2 from '../../../Oauth/OAuth2';

const url = new URL(window.location.href);

const code = url.searchParams.get("code");

/*TODO: Добавить получение гильдий, а также расширить wrapper для этого. Добавить парсинг данных о пользователе*/

console.log(code);

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