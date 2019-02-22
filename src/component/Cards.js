import React from 'react';
import Main from './Main';
import Header from './Header';
import pictures from "./Pictures.json";

class Cards extends React.Component{
    constructor(props) {
        super(props);

    this.state = {
        points:0,
        counter:1,
        pic: pictures
    };
    this.handleCountUp = (e)=>{
        e.preventDefault()
        if(parseInt(e.target.id) === this.state.counter){
            this.setState({points: this.state.points +1})
            this.setState({pic: this.state.pic.sort(function(a, b){return 0.5 - Math.random()})})
            this.setState({counter: this.state.counter + 1})
        }
        else{
            this.setState({counter: 1,points:0,pic: this.state.pic.sort(function(a, b){return 0.5 - Math.random()})})
        }
             
    }}

    render()
    {
    return(
        <div>
            <Header point={this.state.points}/>
            <Main>
                {this.state.pic.map(item =>(
                    <img src={item.src} 
                    alt={item.name}
                    id={item.id}
                    key={item.id}
                    onClick = {this.handleCountUp} 
                    className="img-thumbnail rounded float-left" height="200px" width="200px">
                    </img>))}
            </Main>
        </div>
    )
}
}

export default Cards;
