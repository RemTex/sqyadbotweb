import React from "react";
import './MainContainer.css';
import union from './Union.svg';
import logo from './WLogo.svg';

const MainContainer = () => {
    return (
        <div>
            <div className="container">
                <a>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, in! Minus, architecto sit rem rerum doloribus impedit eos officia, quisquam cupiditate cum cumque ratione temporibus placeat iusto, atque suscipit consequuntur!
                </a>
                <img className="imagefit1" src={union}/>
            </div>
            <div className="container">
                <img className="imagefit1" src={union}/>
                <a>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores dolorem aut alias assumenda fugiat, commodi mollitia esse quis a quas laudantium accusamus, quidem voluptate cum sunt fugit sed impedit.
                </a>
            </div>
            <div className="invite">
                <img src={logo} className="logo_middle_fit"></img>
                <a href="https://discord.com/api/oauth2/authorize?client_id=1030561734840307803&permissions=8&scope=bot" className="AddBtn">
                    Add to discord
                </a>
            </div>
            <div className="container" id="bottomcon">
                <a>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quo iusto voluptatum tempore aliquam nobis consequuntur. Ab velit fuga, obcaecati temporibus alias expedita in blanditiis sunt pariatur impedit, debitis fugit.
                </a>
                <img className="imagefit1" src={union}/>
            </div>
        </div>
    );
}


export default MainContainer;