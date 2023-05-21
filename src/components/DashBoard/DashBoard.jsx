import React from "react";
import "./DashBoard.css";
import separator from "./Sep.svg";
import logo from "./WLogo.svg";
import AvalilableServer from "./AvalilableServer/AvalilableServer";
import NavFunction from "./NavFunctionBar/NavFunction";
import UserContainer from "./UserContainer/UserContainer";
import { Link } from "react-router-dom";

const DashBoard = () => {
    return(
        <div>
            <div className="nav_container">
                
                <div className="main_logo_container">
                    <div className="logo_container">
                        <Link to="/">
                            <img src={logo} className="logo_fit"/> 
                        </Link>
                        <h1>Dashboard</h1>
                    </div>
                    <img src={separator}/>
                </div>


                {/* Надо добавить роут и как то сделать чтобы
                выводило то кол-во серверов где есть пользователь
                с правами администратора (скорее всего через js) */}
                <AvalilableServer/>


                {/* при выборе сервера будет появляться
                поле с доступными функциями думаю можно это реализовать либо
                через роуты либо через js где будет проверятся ивент активации
                кнопки и с помощью этого будет меняться либо Visibility у
                NavFunction либо display c none на block или любой другой удобный */}
                <NavFunction/>

                <div className="user_container">
                    <div className="user">
                        <UserContainer/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashBoard;