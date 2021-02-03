import React, { useState } from 'react';

const EditToDoForm = ({ todo, editTodo }) => {
  const [newTodo, setNewTodo] = useState(todo.text);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e, newTodo) => {
    e.preventDefault();
    editTodo(newTodo);
  }

  return (
    <form id="edit-todo-form" onSubmit={(e) => handleSubmit(e, newTodo)}>
      <div className="input-group input-group-lg mb-3">
        <input
          id="edit-todo" type="text" className="form-control" autoComplete="off"
          placeholder="What to do next?" aria-label="New todo"
          value={newTodo} onChange={handleChange}
        />
        <button className="btn btn-success" type="submit">Save</button>
        <button
          className="btn btn-success" type="button"
          onClick={(e) => handleSubmit(e, null)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditToDoForm;