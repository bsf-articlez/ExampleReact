import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import {Footer} from './Footer';
import ButtonLike from './LikeButton';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      message:"UnLike",
      type:""
    }
    this.changeMessage=this.changeMessage.bind(this);
    this.insertData=this.insertData.bind(this);
    this.clearData=this.clearData.bind(this);
  }
  changeMessage(){
    this.setState({message:"Like"});
  }
  insertData(){
    var item = "Item" + (this.state.data.length + 1);
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data:myArray});
  }
  clearData(){
    this.setState({data:[]});
  }
  onChange(event){
    this.setState({type:event.target.value});
  }
  render(){
    return(
        <div>
            <Header/>
            <Content title="Being to react" name="Sumet Funan" study="React"/>
            <ButtonLike/>
            <div>
              <button onClick={this.insertData}>Insert</button>
              <button onClick={this.clearData}>Clear</button>
            </div>
            <h3>{this.state.data}</h3>
            <br/><br/>
            <input type="text" onChange={this.onChange.bind(this)}></input>
            <h2>Wellcome: {this.state.type}</h2>
            <Footer/>
        </div>
    );
  }
}

export default App;
