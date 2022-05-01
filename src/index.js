
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import configureStore from './redux/store'

React.icons = icons;
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);



//git testing

