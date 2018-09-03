import React, { Component } from 'react';

export class CommentForm extends Component{
    render(){
        return(
            <div>
                <h1>Add Comment</h1>
                <form>
                    <input required type="text" placeholder="ป้อนชื่อ" /><br /><br />
                    <textarea required rows="5" cols="28" placeholder="ข้อความ" /><br /><br />
                    <button>Comment</button>
                </form>
            </div>
        );
    }
}