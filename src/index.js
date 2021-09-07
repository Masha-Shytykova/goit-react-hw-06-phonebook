import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import store from './redux/store';
//import { deleteContact, addContact } from './redux/actions';
import { Provider } from 'react-redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
