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
    <form id="new-todo-form" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          id="new-todo" type="text" className="form-control" autoComplete="off" placeholder="What to do next?"
          value={todo} onChange={handleChange}
        />
        <label className="visually-hidden" htmlFor="new-todo">New Task</label>
        <button className="btn btn-primary" type="submit">Add Task</button>
      </div>
    </form>
  );
}

export default NewToDoForm;