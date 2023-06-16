import React from 'react';
import './UserContainer.css';
import ExitElement from './ExitElem.svg';
import UserImage from './UserImage.svg';

const UserContainer = () => {
    return (
        <div id='container'>
            <div className='user_name'>
                <img src={UserImage}>
                </img>
                <div className='user_id'>
                    <h1>
                        <span>
                            {}
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