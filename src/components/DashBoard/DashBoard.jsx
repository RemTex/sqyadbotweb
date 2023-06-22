import React from "react";
import "./DashBoard.css";
import separator from "./Sep.svg";
import select_img from "./Selected_icon.svg";
import logo from "./WLogo.svg";
import AvalilableServer from "./AvalilableServer/AvalilableServer";
import NavFunction from "./NavFunctionBar/NavFunction";
import UserContainer from "./UserContainer/UserContainer";
import { Link } from "react-router-dom";
import { useQuery } from 'react-query';
import { useOAuth } from "../../OAuthProvider/OAuthProvider";
import BigData from "./BigDataPage/BigDataPage";

const DashBoard = () => {

    const oauth = useOAuth().oauth;

    const { isLoading, error, data } = useQuery(
        'guilds',
        () => 
        oauth.userGuildsRequest().then((result) => result)
    );

    let guildOwner = [];

    for (var i in data){
        if (data[i].owner === true){

            guildOwner.push([data[i].name, `https://cdn.discordapp.com/icons/${data[i].id}/${data[i].icon}.png`])

            // data[i].name
            // `https://cdn.discordapp.com/icons/${data[i].id}/${data[i].icon}.png`
        }
    }

    let bigdatastate = false;
    let moderationstate = false;

    function ChangeModerationState(){
        if (moderationstate == false){
            moderationstate = true
            bigdatastate = false
        }
        else{
            moderationstate = false
            bigdatastate = false

        }
    }

    function ChangeBigDataState(){
        if (bigdatastate == false){
            moderationstate = false
            bigdatastate = true

        }
        else{
            moderationstate = false
            bigdatastate = false

        }
    }


    return(
        <div className="main_con">
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
                <AvalilableServer data={data}/>


                {/* при выборе сервера будет появляться
                поле с доступными функциями думаю можно это реализовать либо
                через роуты либо через js где будет проверятся ивент активации
                кнопки и с помощью этого будет меняться либо Visibility у
                NavFunction либо display c none на block или любой другой удобный */}
                {/* <NavFunction/> */}

                <nav>
                    <button onClick={ChangeModerationState} id="first">
                        <img src={select_img} className="selected"/>
                        Moderation
                    </button>
                    <button onClick={ChangeBigDataState} id="second">
                        <img src={select_img} className="selected"/>
                        BigData
                    </button>
                </nav>


                <div className="user_container">
                    <div className="user">
                        <UserContainer/>
                    </div>
                </div>
                
            </div>

            <div className="page_container">
                <BigData></BigData>
            </div>

        </div>
    )
}

export default DashBoard;