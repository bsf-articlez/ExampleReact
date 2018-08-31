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
    var item = "Item" + this.state.data.length;
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data:myArray});
  }
  clearData(){
    this.setState({data:[]});
  }
  render(){
    var mystyle = {
      fontSize:100,
      color:'#FF0000'
    }
    return(
        <div>
            <Header/>
            <Content title="Being to react" name="Sumet Funan" study="React"/>
            <ButtonLike/>
            <h3>{this.state.data}</h3>
            <button onClick={this.insertData}>Insert</button>
            <button onClick={this.clearData}>Clear</button>
            <Footer/>
        </div>
    );
  }
}

export default App;
