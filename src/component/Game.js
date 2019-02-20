import React from "react";
import Cards from "./Cards"
import Header from "./Header";
import Main from "./Main";
import pictures from "./Pictures.json";


function Game(){
    return(
        <div>
        <Header />
        <Main>
            <Cards pictures = {pictures}/>
        </Main>
        </div>
    )
}

export default Game;