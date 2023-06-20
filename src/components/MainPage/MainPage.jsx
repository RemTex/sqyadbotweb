import React from "react";
import { Route, Routes, Outlet , Link } from 'react-router-dom';
import './MainPage.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useOAuth } from "../../OAuthProvider/OAuthProvider";


const MainPage = (isUnsigned) => {

    const oauth = useOAuth().oauth;

    if(isUnsigned){
        oauth.unsign();
    }

    return(
        <div>
            <Header/>
        
            <Outlet/>

            <Footer/>
        </div>
    )
}

export default MainPage;