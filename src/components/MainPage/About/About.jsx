import React from "react";
import "./About.css";
import vectorUpper from "./Vector upper.svg";
import CommentContainer from "./CommentContainer/CommentContainer";

const About = () => {
    return (
        <div className="about_container">

            <div className="content_container">
                <div className="about_word">
                    О нас
                </div>
                <img src={vectorUpper} className="image_fit"/>
                <CommentContainer/>
            </div>

        </div>
    )
}

export default About;