import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ToDoList from './ToDoList'
import {createStore} from 'redux'
import commentReducer from './Reducers/commentReducer'

const store = createStore(commentReducer); // Create store data

ReactDOM.render(
    //<App />, 
    <ToDoList />,
    document.getElementById('root')
);