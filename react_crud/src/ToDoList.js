import React, {Component} from 'react'

class ToDoList extends Component{
    constructor(){
        super();
        this.state = {
            list:[]
        }

        this.insertToDoList = this.insertToDoList.bind(this)
    }
    insertToDoList(){
        var myArray = this.state.list
        myArray.push(this.getName.value)
        this.setState({
            list:myArray
        })
    }
    bindValueForEdit(e){
        
    }
    render(){
        var num = 0
        var items = this.state.list
        var itemList = items.map((items)=>
            <div>
                <li key={items}>{items}
                <button key={++num} onClick={this.bindValueForEdit({items})}>Edit</button>
                </li>
            </div>
        )
        return(
            <div>
                <h1>To do</h1>
                <br />
                <br />
                To do: <input type="text" ref={(input)=>this.getName = input}/>
                <button onClick={this.insertToDoList}>Add</button>
                <div>{itemList}</div>
            </div>
        );
    }
}

export default ToDoList 