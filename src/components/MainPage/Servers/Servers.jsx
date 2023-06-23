import React from "react";
import "./Servers.css"
import vectorUpper from "./Vector upper.svg";
import ServerContainer from "./ServerContainer/ServerContainer";

const Servers = () => {
    return (
        <div className="servers_content">

            <div className="content_container">
                <div className="servers_word">
                    Сервера
                </div>
                <img src={vectorUpper} className="image_fit"/>
                <ServerContainer/>
            </div>
        </div>
    )
}

export default Servers;