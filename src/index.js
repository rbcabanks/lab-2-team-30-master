import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './Search';
import Sorted from './Sorted';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Search />
    <Sorted />
  </React.StrictMode>,
  document.getElementById('root')
);


