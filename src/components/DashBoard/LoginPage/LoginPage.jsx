import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useOAuth } from "../../../OAuthProvider/OAuthProvider";

const LoginPage = () => {

    const oauth = useOAuth().oauth;

    let [searchParams, setSearchParams] = useSearchParams();

    oauth.setUserCode(searchParams.get("code"));

    const navigation = useNavigate()

    useEffect(() => {oauth.tokenRequest()
        .then(() => {

            localStorage.setItem('authenticated_user', JSON.stringify(oauth));
            
            navigation("/dashboard")})
    })  

    return(
        <>
        </>
    )
}

export default LoginPage;