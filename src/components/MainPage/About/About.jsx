import React from "react";
import "./About.css";
import vectorUpper from "./Vector upper.svg";

const About = () => {
    return (
        <div className="about_container">

            <div className="content_container">
                <img src={vectorUpper} className="image_fit"/>
            </div>
        </div>
    )
}

export default About;