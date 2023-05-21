import React from "react";
import './Footer.css'
import lowersvg from './Vector lower.svg';

const Footer = () => {
    return(
        <footer>
            <img src={lowersvg} className="image_fit"/>
        </footer>
    )
}

export default Footer;