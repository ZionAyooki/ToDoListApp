import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewToDoForm from '../components/NewToDoForm';

const ToDoListApp = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    const newTodo = { id: uuid(), text: todo, isDone: false };
    setList([...list, newTodo]);
  };

  const removeTodo = (todoId) => {

  };

  const editTodo = (todoId, newTodo) => {

  };

  const changeDone = (todoId) => {

  };

  const updateFilter = () => {

  };
  
  return (
    <div className="container">
      <h1 className="text-center">My Todos</h1>
      <div className="row">
        <div className="col-12">
          <NewToDoForm addToDo={addTodo} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between mb-5">
              <div className="status">
                3 tasks left
              </div>
              <div className="filter">
                Filter:
                <button className="btn btn-outline-dark">All</button>
                <button className="btn btn-outline-dark">Active</button>
                <button className="btn btn-outline-dark">Completed</button>
              </div>
            </div>
            <div className="col-12">
              <div className="todo-item">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="todo-0" defaultChecked={true} />
                  <label className="form-check-label" htmlFor="todo-0">Task</label>
                </div>
                <div className="todo-delete">
                  <button className="btn btn-outline-danger">Edit</button>
                  <button className="btn btn-outline-danger">Remove</button>
                </div>
              </div>
              <div className="todo-item">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="todo-0" defaultChecked={false} />
                  <label className="form-check-label" htmlFor="todo-0">Task</label>
                </div>
                <div className="todo-delete">
                  <button className="btn btn-outline-danger">Edit</button>
                  <button className="btn btn-outline-danger">Remove</button>
                </div>
              </div>
              <div className="todo-item">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="todo-0" defaultChecked={true} />
                  <label className="form-check-label" htmlFor="todo-0">Task</label>
                </div>
                <div className="todo-delete">
                  <button className="btn btn-outline-danger">Edit</button>
                  <button className="btn btn-outline-danger">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoListApp;