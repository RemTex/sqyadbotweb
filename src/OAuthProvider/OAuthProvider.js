import React, { createContext, useState, useContext } from 'react';
import OAuth from '../Oauth/OAuth2';

const OAuthContext = createContext(null)


export const OAuthContextProvider = ({ children }) => {
    const oauthObject = new OAuth({
        clientId: "1030561734840307803",
    clientSecret: "7HWeBOrHjMSNznm9v56FcTTITlKRyX5v",
    redirectUri: "http://localhost:3000/loginpage",
    });
    const [oauth, setOauth] = useState(oauthObject)

    return <OAuthContext.Provider value={{oauth, setOauth}}>
        { children }
    </OAuthContext.Provider>
};

export const useOAuth = () => useContext(OAuthContext);