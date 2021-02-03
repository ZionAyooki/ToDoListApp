import React, { useState } from 'react';

const ToDoItem = ({ todo, removeTodo, editTodo, changeDone }) => {
  return (
    <div className="todo-item">
      <div className="form-check">
        <input
          id={todo.id} type="checkbox" className="form-check-input"
          defaultChecked={todo.isDone} onChange={() => changeDone(todo.id)}
        />
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