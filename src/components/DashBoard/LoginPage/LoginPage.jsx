import React, { Component, useEffect } from "react";
import OAuth from "../../../Oauth/OAuth2";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useOAuth } from "../../../OAuthProvider/OAuthProvider";

const LoginPage = () => {

    const oauth = useOAuth().oauth;

    let [searchParams, setSearchParams] = useSearchParams();

    oauth.setUserCode(searchParams.get("code"));

    const navigation = useNavigate()

    useEffect(() => {oauth.tokenRequest().then(() => navigation("/dashboard"))})  

    return(
        <>
        </>
    )
}

export default LoginPage;