import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewToDoForm from '../components/NewToDoForm';
import ToDoItem from '../components/ToDoItem';

import { FILTER_MAP, FILTER_NAMES } from '../data/filterData';
import FilterButton from '../components/FilterButton';

const ToDoListApp = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState(FILTER_NAMES[0]);

  const addTodo = (todo) => {
    const newTodo = { id: uuid(), text: todo, isDone: false };
    setList([...list, newTodo]);
  };

  const removeTodo = (todoId) => {
    setList([...list.filter(todo => todo.id !== todoId)]);
  };

  const editTodo = (todoId, newTodo) => {
    setList([...list.map(todo => todo.id === todoId ? {...todo, text: newTodo} : todo)]);
  };

  const changeDone = (todoId) => {
    setList([...list.map(todo => todo.id === todoId ? {...todo, isDone: !todo.isDone} : todo)]);
  };

  const updateFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const filterButtons = FILTER_NAMES.map(name => <FilterButton key={name} name={name} isActive={name === filter} updateFilter={updateFilter} />);
  const filteredList = list.filter(FILTER_MAP[filter]).map(todo => (
    <ToDoItem key={todo.id} todo={todo} removeTodo={removeTodo} editTodo={editTodo} changeDone={changeDone} />
  ));
  const todosCount = list.length;

  return (
    <div className="container app-container">
      <h1 className="text-center">My Todos</h1>
      <div className="row">
        <div className="col-12">
          <NewToDoForm addToDo={addTodo} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 filter-row">
          <div className="btn-group filter-buttons">
            {filterButtons}
          </div>
          <div className="todo-list-status">
            {todosCount} tasks left
          </div>
        </div>
      </div>
      <div className="row">
        {filteredList}
      </div>
    </div>
  );
}

export default ToDoListApp;