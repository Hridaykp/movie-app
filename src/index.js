import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componenets/App';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import  rootReducer  from './reducers';

//function logger(obj, next, action) => CURRIED Function
const logger = function({dispatch, getState}){
  return function(next){
    return function(action){
      //middleware code
      console.log('ACTION_TYPE = ', action.type);
      next(action);
    }
  }
}

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('store =>', store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

