import React, { useState } from 'react';

const NewToDoForm = ({ addToDo }) => {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(todo);
    setTodo('');
  }

  return (
    <form id="new-todo" onSubmit={handleSubmit}>
      <div className="input-group input-group-lg mb-3">
        <input
          id="new-todo" type="text" className="form-control" autoComplete="off"
          placeholder="What to do next?" aria-label="New todo"
          value={todo} onChange={handleChange}
        />
        <button className="btn btn-success" type="submit">Add To-Do</button>
      </div>
    </form>
  );
}

export default NewToDoForm;