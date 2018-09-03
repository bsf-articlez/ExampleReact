import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {createStore} from 'redux';
import commentReducer from './Reducers/commentReducer';

const store = createStore(commentReducer); // Create store data

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);