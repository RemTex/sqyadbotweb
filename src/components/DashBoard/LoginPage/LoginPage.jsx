import React from "react";
import OAuth from "../../../Oauth/OAuth2";


const LoginPage = () => {
    const oauth = new OAuth();
    let data;

    const url = new URL(window.location.href);

    oauth.setUserCode(url.searchParams.get("code"));

    const url1 = oauth.GetRedirectURL();

    oauth.tokenRequest()

    data = OAuth.instance

    console.log(data.avatar)

    return(
        <>

        </>
    )
}

export default LoginPage;