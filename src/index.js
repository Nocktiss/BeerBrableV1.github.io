import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import cartReducer from './redux/reducers/CartReducers';

// Import CSS
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import './App.css';

const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>   
    <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'));

registerServiceWorker();
