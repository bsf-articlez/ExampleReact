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
  }
  changeMessage(){
    this.setState({message:"Like"});
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
            <Footer/>
        </div>
    );
  }
}

export default App;
