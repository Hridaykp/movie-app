import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componenets/App';
import { legacy_createStore as createStore } from 'redux';
import movies from './reducers';


const store = createStore(movies);
console.log('store =>', store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

