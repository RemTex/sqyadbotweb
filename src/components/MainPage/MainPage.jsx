import React from "react";
import { Route, Routes, Outlet , Link } from 'react-router-dom';
import './MainPage.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


const MainPage = () => {

    return(
        <div>
            <Header/>
        
            <Outlet/>

            <Footer/>
        </div>
    )
}

export default MainPage;