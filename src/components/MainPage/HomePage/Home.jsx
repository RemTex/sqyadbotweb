import React from "react";
import "./Home.css";
import MainContainer from "./MainContainer/MainContainer";
import HelloBar from "./HelloBar/HelloBar";

const Home = () => {
    return(
        <div>
            <HelloBar/>
            <MainContainer/>
        </div>
    )
}

export default Home;