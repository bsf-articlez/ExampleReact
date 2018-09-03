import React, { Component } from 'react';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            name:"UnLike",
            counter:0
        }
    }
    render(){
        return(
            <div>
                <h1>Exmaple React ^0^</h1>
                <h2>{this.state.name}</h2>
                <h3>{this.state.counter}</h3>
            </div>
        );
    }
}

export default Header;