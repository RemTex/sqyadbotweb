import React from "react";
import './MainContainer.css';
import union from './Union.svg';
import logo from './WLogo.svg';

const MainContainer = () => {
    return (
        <div>
            <div className="container">
                <a className="function_text">
                    Модерация
                    <br />
                    <br />
                    <li>
                        Удобный интерфейс взаимодейсвия.
                    </li>

                    <li>
                        Просмотр логов модерации
                    </li>
                </a>
                <img className="imagefit1" src={union}/>
            </div>
            <div className="invite">
                <img src={logo} className="logo_middle_fit"></img>
                <a href="https://discord.com/api/oauth2/authorize?client_id=1119512250118590555&permissions=8&scope=bot" className="AddBtn">
                    Add to discord
                </a>
            </div>
            <div className="container">
                <img className="imagefit1" id="bottomcon" src={union}/>
                <a className="function_text">
                    Большие данные
                    <br/>
                    <br />
                    <li>
                        Возможность просмотра данных сервера.
                    </li>

                    <li>
                        Просмотр предсказаний для вашего сервера.
                    </li>
                </a>
            </div>
            {/* <div className="container" id="bottomcon">
                <a>
                    
                </a>
                <img className="imagefit1" src={union}/>
            </div> */}
        </div>
    );
}


export default MainContainer;