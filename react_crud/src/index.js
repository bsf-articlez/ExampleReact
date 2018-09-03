import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {createStore} from 'redux';

const store = createStore(); // Create store

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);