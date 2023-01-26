import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import './index.css';
import App from './componenets/App';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import  rootReducer  from './reducers';

//function logger(obj, next, action) => CURRIED Function
const logger = ({dispatch, getState}) => (next) => (action) => {
  if(typeof action !== 'function'){
    console.log('ACTION_TYPE = ', action.type);
  }
  next(action);
}
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store =>', store);

export const StoreContext = createContext();
console.log('StoreContext =>', StoreContext);

class Provider extends React.Component{
  render(){
    const {store} = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

