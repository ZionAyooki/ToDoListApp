import React, { useState } from 'react';

const EditToDoForm = React.forwardRef(({ todo, editTodo }, ref) => {
  const [newTodo, setNewTodo] = useState(todo.text);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e, newTodo) => {
    e.preventDefault();
    editTodo(newTodo);
  }

  return (
    <form className="edit-todo-form" onSubmit={(e) => handleSubmit(e, newTodo)}>
      <div className="todo-edit">
        <label className="visually-hidden" htmlFor={`edit-todo-${todo.id}`}>Edit {todo.text}</label>
        <input
          id={`edit-todo-${todo.id}`} type="text" className="form-control" autoComplete="off"
          value={newTodo} onChange={handleChange} ref={ref}
        />
        <div className="btn-group">
          <button className="btn btn-success" type="submit">
            Save
            <span className="visually-hidden"> task as {newTodo}</span>
          </button>
          <button
            className="btn btn-outline-danger" type="button"
            onClick={(e) => handleSubmit(e, null)}
          >
            Cancel
            <span className="visually-hidden"> edition for {todo.text}</span>
          </button>
        </div>
      </div>
    </form>
  );
});

export default EditToDoForm;