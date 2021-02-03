import React, { useState } from 'react';

const ToDoItem = ({ todo, removeTodo, editTodo, changeDone }) => {
  return (
    <div className="todo-item">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id={todo.id} defaultChecked={todo.isDone} />
        <label className="form-check-label" htmlFor={todo.id}>{todo.text}</label>
      </div>
      <div className="todo-delete">
        <button className="btn btn-outline-danger">Edit</button>
        <button className="btn btn-outline-danger">Remove</button>
      </div>
    </div>
  );
};

export default ToDoItem;