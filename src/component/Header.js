import React from "react";

function Header(props){
    return(
        <div className="jumbotron">
  <h1 className="display-4">Clicky Game</h1>
  <p className="lead">Click a Character score a point</p>
  <hr className="my-4"></hr>
  <p>score: {props.point}</p>
</div>
    )
}

export default Header;