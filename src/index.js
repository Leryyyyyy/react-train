import '@babel/polyfill/';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import './index.css';
import Router from './components/Router';

ReactDOM.render(
  // <App />,
  <Router />,
  document.getElementById('containter'),

);
