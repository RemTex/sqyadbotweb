import React from "react";
import "./DashBoard.css";
import arrow from "./arrow.svg";
import server_img from "./SeverImage.svg";
import seporator from "./Sep.svg";
import logo from "./WLogo.svg";
import select_img from "./Selected_icon.svg";


const DashBoard = () => {
    return(
        <div className="container">
            <div className="nav_container">
                <div className="main_logo_container">
                    <div className="logo_container">
                        <img src={logo} className="logo_fit"/>
                        <h1>Dashboard</h1>
                    </div>
                    <img src={seporator}/>
                </div>
                <div className="server_name">
                    <img src={arrow} className="arrow_back"/>
                    <img src={server_img} className="server_img"/>
                    <span>
                        <h1>
                            Server name
                        </h1>
                    </span>
                </div>
                <nav>
                    <button id="first">
                        <img src={select_img} className="selected"/>
                        Function1
                    </button>
                    <button>
                        <img src={select_img} className="selected"/>    
                        Function2
                    </button>
                    <button>
                        <img src={select_img} className="selected"/>
                        Function3
                    </button>
                    <button>
                        <img src={select_img} className="selected"/>
                        Function4
                    </button>
                    <button>
                        <img src={select_img} className="selected"/>
                        Function5
                    </button>
                </nav>
                <div className="user_container">
                    <div className="user"></div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;