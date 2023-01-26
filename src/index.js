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
//const connectedAppComponent = connect(callback)(App);
export function connect(callback){
  return function (Component) { 
     class ConnectedComponent extends React.Component{
      constructor(props){
        super(props);
        this.unsubscribe = this.props.store.subscribe(()=>this.forceUpdate())
      }
      componentWillUnmount(){
        this.unsubscribe();
      }
      render(){
        const {store} = this.props
        const state = store.getState();
        const dataToBePassedAsProx = callback(state)
        return (
          <Component {...dataToBePassedAsProx} 
            dispatch = {store.dispatch}
          />
        )
      }
    }
    class ConnectedComponentWrapper extends React.Component{
      render(){
        return(
          <StoreContext.Consumer>
            {store=> <ConnectedComponent store ={store}/>}
          </StoreContext.Consumer>
        )
      }
    }
    return ConnectedComponentWrapper;
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

