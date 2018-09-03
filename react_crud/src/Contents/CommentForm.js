import React, { Component } from 'react';

export class CommentForm extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value; // Get value from input textbox getName
        const message = this.getMessage.value; // Get value from input textArea getMessage
        
        // Object
        const data = {
            id: new Date(),
            name,
            message
        }
        console.log(data);
    }

    render(){
        return(
            <div>
                <h1>Add Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="ป้อนชื่อ" ref={(input)=>this.getName = input} /><br /><br />
                    <textarea required rows="5" cols="28" placeholder="ข้อความ" ref={(input)=>this.getMessage = input} /><br /><br />
                    <button>Comment</button>
                </form>
            </div>
        );
    }
}