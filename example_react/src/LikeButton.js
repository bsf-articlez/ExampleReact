import React, { Component } from 'react'

class ButtonLike extends Component{
    constructor(){
        super();
        this.state={
            message:"UnLike"
        }
        this.changeMessage=this.changeMessage.bind(this);
    }
    changeMessage(){
        if(this.state.message=="UnLike"){
            this.setState({message:"Like"});
        }
        else{
            this.setState({message:"UnLike"});
        }
    }
    render(){
        return(
            <button onClick={this.changeMessage}>{this.state.message}</button>
        );
    }
}

export default ButtonLike;