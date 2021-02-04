import React from 'react';
import ReactDOM from 'react-dom';
import ToDoListApp from './app/ToDoListApp';
import './styles/style.css';

ReactDOM.render(
  <React.StrictMode>
    <ToDoListApp />
  </React.StrictMode>,
  document.getElementById('root')
);
