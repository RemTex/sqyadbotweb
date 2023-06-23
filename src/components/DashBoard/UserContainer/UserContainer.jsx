import React from 'react';
import './UserContainer.css';
import ExitElement from './ExitElem.svg';
import Skeleton from './UserImage.svg';
import { useOAuth } from '../../../OAuthProvider/OAuthProvider';

const UserContainer = () => {

    const oauth = useOAuth().oauth;

    let username = oauth.globalName;
    let avatar = oauth.avatarURL;

    return (
        <div id='container'>
            <div className='user_name'>
                <div className='user_img_container'>
                    <img src={avatar}/>
                </div>
                <div className='user_id'>
                    <h1>
                        {username}
                    </h1>
                </div>
            </div>
            <a className='exit' href='/' onClick={oauth.unsign()}>
                <img src={ExitElement}/>
            </a>
        </div>
    )
}

export default UserContainer;