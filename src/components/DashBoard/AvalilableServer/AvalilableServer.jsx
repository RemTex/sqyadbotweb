import React from "react";
import "./AvalilableServer.css";
import arrow from "./arrow.svg";
import server_img from "./SeverImage.svg";

const AvalilableServer = (props) => {

    return(
        <div className="server_container">
            <img src={arrow} className="arrow_back"/>
            <img src={props.data[1]} className="server_img"/>
            <span>
                <h1>
                    {props.data[0]}
                </h1>
            </span>
        </div>
    )
}

export default AvalilableServer;