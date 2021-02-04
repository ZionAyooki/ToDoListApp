import React, { useState } from 'react';
import EditToDoForm from './EditToDoForm';
import ShowToDoItem from './ShowToDoItem';

const ToDoItem = ({ todo, removeTodo, editTodo, changeDone }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (newTodo) => {
    if (newTodo) {
      if (todo.text !== newTodo) {
        editTodo(todo.id, newTodo);
      }
    }
    setIsEdit(false);
  }

  return (
    <div className="col-12 todo-item">
      {isEdit ? <EditToDoForm todo={todo} editTodo={handleEdit} /> : <ShowToDoItem todo={todo} changeDone={changeDone} editTodo={() => setIsEdit(true)} removeTodo={removeTodo} /> }
    </div>
  );
};

export default ToDoItem;