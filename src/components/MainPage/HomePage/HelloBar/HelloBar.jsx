import React from "react";
import './HelloBar.css'
import uppersvg from './Vector upper.svg';
import biglogo from './WLogo.svg'

const HelloBar = () => {
    return(
        <div className="hello-bar">
            <img src={uppersvg} className="imgfit"></img>
            <div className="hello_container">
                <div className="logo-btn_container">
                    <img src={biglogo} className="logo-fit"/>
                    <a href="https://discord.com/api/oauth2/authorize?client_id=1119512250118590555&permissions=8&scope=bot" className="AddBtn">
                        Add to discord
                    </a>
                </div>
                <a className="text_container">
                    Будущее за технологиями
                </a>
            </div>
        </div>
    )
}

export default HelloBar;