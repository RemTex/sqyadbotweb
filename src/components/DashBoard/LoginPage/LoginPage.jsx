import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useOAuth } from "../../../OAuthProvider/OAuthProvider";
import { useQuery } from "react-query";

const LoginPage = () => {

    const oauth = useOAuth().oauth;

    let [searchParams, setSearchParams] = useSearchParams();

    oauth.setUserCode(searchParams.get("code"));

    const navigation = useNavigate()

    const { isLoading, error, data } = useQuery(
        'tokens',
        () =>{
            oauth.tokenRequest().then(() => {
                localStorage.setItem('authenticated_user', JSON.stringify(oauth));
                
            navigation("/dashboard");});
        }
    );

    if (isLoading) {
        return(
            <div className="loading-body">
                <div className="loading-container">
                    <div className="code-loader">
                        <span>{'<'}</span>/<span>{'>'}</span>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <>
        </>
    )
}

export default LoginPage;