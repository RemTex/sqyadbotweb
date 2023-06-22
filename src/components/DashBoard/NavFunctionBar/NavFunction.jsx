import React from "react";
import "./NavFunction.css";
import select_img from "./Selected_icon.svg";

const NavFunction = () => {
    return(
        <nav>
            {/* Тут будет либо больше либо менше функций
            я думаю не стоит делать для этого отдельный файл
            как это было с AvalilableServer */}
            <button id="first">
                <img src={select_img} className="selected"/>
                Moderation
            </button>
            <button>
                <img src={select_img} className="selected"/>
                BigData
            </button>
        </nav>
    )
}

export default NavFunction;