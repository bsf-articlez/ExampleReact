/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';*/
import {createStore,combineReducers} from 'redux';

const initialState={
    result:15000,
    value:[]
}

const userReducer = (state={name:"Sumet",age:25},action)=>{
    switch(action.type){
        case "setName":
            state={
                ...state,
                name:action.payload
            }
            break;
        case "setAge":
            state={
                ...state,
                age:action.payload
            }
            break;
    }
    return state;
}

const employeeReducer = (state=initialState,action) => {
    switch(action.type){
        case "ADD":
            state={
                ...state,
                result:state.result+=action.payload,
                value:[...state.value,action.payload]
            }
            break;
        case "SUBTRACT":
        state={
            ...state,
            result:state.result-=action.payload,
            value:[...state.value,action.payload]
        }
            break;
    }
    return state;
}

const store=createStore(combineReducers({employeeReducer,userReducer}));

store.subscribe(()=>{
    console.log("Update store:", store.getState());
})

store.dispatch({
    type:"ADD",
    payload:1555
});

store.dispatch({
    type:"SUBTRACT",
    payload:1555
});

store.dispatch({
    type:"setName",
    payload:"Funan"
});

store.dispatch({
    type:"setAge",
    payload:19
});

/*
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
*/
