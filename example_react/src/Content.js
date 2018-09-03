import React, { Component } from 'react';

class Content extends Component{
    render(){
        return(
            <div>
                <h2>My name is Sumet Funan</h2>
                <p>{this.props.title}</p>
                <p>{this.props.name}</p>
                <p>{this.props.study}</p>
            </div>
        );
    }
}

export default Content;