import React from 'react';

const ShowToDoItem = ({ todo, removeTodo, editTodo, changeDone  }) => {
  return (
    <div className="todo-show">
      <div className="form-check">
        <input
          id={todo.id} type="checkbox" className="form-check-input"
          defaultChecked={todo.isDone} onChange={() => changeDone(todo.id)}
        />
        <label className="form-check-label" htmlFor={todo.id}>{todo.text}</label>
      </div>
      <div className="btn-group">
        <button
          className="btn btn-outline-secondary"
          onClick={() => editTodo(true)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => removeTodo(todo.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ShowToDoItem;