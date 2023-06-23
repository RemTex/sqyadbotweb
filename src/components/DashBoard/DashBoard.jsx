import React from "react";
import "./DashBoard.css";
import separator from "./Sep.svg";
import select_img from "./Selected_icon.svg";
import logo from "./WLogo.svg";
import AvalilableServer from "./AvalilableServer/AvalilableServer";
import NavFunction from "./NavFunctionBar/NavFunction";
import UserContainer from "./UserContainer/UserContainer";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { useQuery } from 'react-query';
import { useOAuth } from "../../OAuthProvider/OAuthProvider";
import BigData from "./BigDataPage/BigDataPage";
import ModerationFrame from "./ModerationFrame/ModerationFrame";
import HelloFrame from "./HelloFrame/HelloFrame";
import { render } from "react-dom";

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

            guildOwner.push(data[i].name, `https://cdn.discordapp.com/icons/${data[i].id}/${data[i].icon}.png`)

            // data[i].name
            // `https://cdn.discordapp.com/icons/${data[i].id}/${data[i].icon}.png`
        }
    }

    // let bigdatastate = false;
    // let moderationstate = false;

    // function ChangeModerationState(){
    //     if (moderationstate == false){
    //         moderationstate = true;
    //         bigdatastate = false
    //         console.log('mod', moderationstate)
    //     }
    //     else{
    //         moderationstate = false;
    //         bigdatastate = false
    //         console.log('mod', moderationstate)

    //     }
    // }

    // function ChangeBigDataState(){
    //     if (bigdatastate == false){
    //         moderationstate = false
    //         bigdatastate = true
    //         console.log('data', bigdatastate)

    //     }
    //     else{
    //         moderationstate = false
    //         bigdatastate = false
    //         console.log('data', bigdatastate)

    //     }
    // }

    return(
        <>
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
                    <AvalilableServer data={guildOwner}/>


                    {/* при выборе сервера будет появляться
                    поле с доступными функциями думаю можно это реализовать либо
                    через роуты либо через js где будет проверятся ивент активации
                    кнопки и с помощью этого будет меняться либо Visibility у
                    NavFunction либо display c none на block или любой другой удобный */}
                    {/* <NavFunction/> */}

                    <nav>
                        <Link to="moderation" id="first">
                            <img src={select_img} className="selected"/>
                            Модерация
                        </Link>
                        <Link to="bigdata" id="second">
                            <img src={select_img} className="selected"/>
                            Большие данные
                        </Link>
                    </nav>


                    <div className="user_container">
                        <div className="user">
                            <UserContainer/>
                        </div>
                    </div>
                </div>

                
                <div className="page_container">
                    <Route path="dashboard/moderation" element={<ModerationFrame/>}/>
                    <Route path="dashboard/bigdata" element={<BigData/>}/>
                </div>
            </div>
        </>
    )
}

export default DashBoard;