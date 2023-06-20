import React, { createContext, useState, useContext } from 'react';
import OAuth from '../Oauth/OAuth2';

const OAuthContext = createContext(null)


export const OAuthContextProvider = ({ children }) => {

    let oauthObject;

    if (localStorage.getItem('authenticated_user') !== null) {
        
        oauthObject = localStorage.getItem('authenticated_user');
        oauthObject = JSON.parse(oauthObject);
        oauthObject = new OAuth(oauthObject)

    } else {
        oauthObject = new OAuth({
            clientId: "1030561734840307803",
            clientSecret: "7HWeBOrHjMSNznm9v56FcTTITlKRyX5v",
            redirectUri: "http://localhost:3000/loginpage",
        });
    }

    const [oauth, setOauth] = useState(oauthObject)

    const setOauthContext = (authenticated_user) => {
        localStorage.setItem('authenticated_user', JSON.stringify(authenticated_user) );
        console.log('asdfasd')
        setOauth(authenticated_user)
    }

    return <OAuthContext.Provider value={{oauth, setOauth: setOauthContext}}>
        { children }
    </OAuthContext.Provider>
};

export const useOAuth = () => useContext(OAuthContext);