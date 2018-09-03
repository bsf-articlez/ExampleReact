import React, { Component } from 'react';
import {CommentForm} from './Contents/CommentForm';
import {ShowComment} from './Contents/ShowComment';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React with Redux CRUD.</h1>
        <CommentForm />
        <ShowComment />
      </div>
    );
  }
}

export default App;
