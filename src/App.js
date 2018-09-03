import React, { Component } from 'react';
import User from './User';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  constructor(){
    super();
  }
  render(){
    return(
        <div>
            <User username={this.props.user.name}/>
            <button onClick={()=>this.props.setName("Wellcome")}>ChangeName</button>
        </div>
    );
  }
}
const mapStatetoProps=(state)=>{
  return {
    user: state.user,
    emp: state.emp
  };
}
const mapDispatchtoProps=(state)=>{
  return {
    setName:(name)=>{
      state.dispatch({
        type:"setName",
        payload:name
      });
    }
  };
}
export default connect(mapStatetoProps,mapDispatchtoProps)(App);
