import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux'

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

const store=createStore(combineReducers({emp:employeeReducer,user:userReducer}));

store.subscribe(()=>{
    console.log("Update store:", store.getState());
})


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
    document.getElementById('root')
);

