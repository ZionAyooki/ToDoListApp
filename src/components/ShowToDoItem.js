import React from 'react';

const ShowToDoItem = ({ todo, removeTodo, editTodo, changeDone  }) => {
  return (
    <div>
      <div className="form-check">
        <input
          id={todo.id} type="checkbox" className="form-check-input"
          defaultChecked={todo.isDone} onChange={() => changeDone(todo.id)}
        />
        <label className="form-check-label" htmlFor={todo.id}>{todo.text}</label>
      </div>
      <div className="todo-delete">
        <button
          className="btn btn-outline-danger"
          onClick={() => editTodo(true)}
        >
          Edit
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => removeTodo(todo.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ShowToDoItem;