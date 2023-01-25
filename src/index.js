import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componenets/App';
import { legacy_createStore as createStore } from 'redux';
import  rootReducer  from './reducers';


const store = createStore(rootReducer);
console.log('store =>', store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

