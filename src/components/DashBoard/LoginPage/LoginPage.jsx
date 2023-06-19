import React from "react";
import OAuth from "../../../Oauth/OAuth2";

const LoginPage = () => {

    const oauth = new OAuth();

    const url = new URL(window.location.href);

    oauth.setUserCode(url.searchParams.get("code"));

    const url1 = oauth.GetRedirectURL();

    oauth.tokenRequest()

    console.log(OAuth.instance.code)

    return(
        <>

        </>
    )
}

export default LoginPage;