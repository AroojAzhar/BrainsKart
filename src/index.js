import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import './bootstrap/css/font-awesome-5.8.1.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      {/* eslint-disable-next-line no-undef */}

        <App/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
