import React from "react";
import "./AvalilableServer.css";
import arrow from "./arrow.svg";
import server_img from "./SeverImage.svg";

const AvalilableServer = () => {
    return(
        <div className="server_container">
            <img src={arrow} className="arrow_back"/>
            <img src={server_img} className="server_img"/>
            <span>
                <h1>
                    Сервер testapp
                </h1>
            </span>
        </div>
    )
}

export default AvalilableServer;