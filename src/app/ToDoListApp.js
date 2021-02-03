import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewToDoForm from '../components/NewToDoForm';
import ToDoItem from '../components/ToDoItem';

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
    setList([...list.map(todo => todo.id === todoId ? {...todo, isDone: !todo.isDone} : todo)]);
  };

  const updateFilter = () => {

  };

  const todosList = list.map(todo => (
    <ToDoItem key={todo.id} todo={todo} removeTodo={removeTodo} editTodo={editTodo} changeDone={changeDone} />
  ));

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
              {todosList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoListApp;