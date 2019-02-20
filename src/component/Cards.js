import React from 'react';



function Cards(props){
    return(
        <div>
            {props.pictures.map(item =>(
                <img src={item.src} 
                alt={item.name}
                key={item.id} 
                className="img-thumbnail rounded float-left" height="200px" width="200px">
                </img>
            ))}
        </div>
    )
}

export default Cards;
