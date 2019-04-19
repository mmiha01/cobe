import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

fetch('https://api.myjson.com/bins/1e8zz3')
.then(response => response.text())
.then((res) => {
  const users = JSON.parse(res);
  ReactDOM.render(<App users={users.teamUsers} />, document.getElementById('root'));
});
