import React from 'react';
import './UserContainer.css';
import ExitElement from './ExitElem.svg';
import UserImage from './UserImage.svg';
import OAuth from '../../../Oauth/OAuth2';

/*TODO: Добавить получение гильдий, а также расширить wrapper для этого. Добавить парсинг данных о пользователе*/




// console.log(token)


const UserContainer = () => {
    
    const url = new URL(window.location.href);
    
    let oauth = new OAuth();

    oauth.setUserCode(url.searchParams.get("code"));

    const token = oauth.tokenRequest();
    

    console.log(token);
    
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