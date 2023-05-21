import React from "react";
import './HelloBar.css'
import uppersvg from './Vector upper.svg';

const HelloBar = () => {
    return(
        <div className="hello-bar">
            <img src={uppersvg} className="imgfit"></img>
        </div>
    )
}

export default HelloBar;