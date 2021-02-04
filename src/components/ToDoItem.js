import React, { useState, useRef, useEffect } from 'react';
import EditToDoForm from './EditToDoForm';
import ShowToDoItem from './ShowToDoItem';
import {usePrevState} from '../app/PrevStateHook';

const ToDoItem = ({ todo, removeTodo, editTodo, changeDone }) => {
  const [isEdit, setIsEdit] = useState(false);

  const wasEdit = usePrevState(isEdit);

  const editField = useRef(null);
  const editBtn = useRef(null);

  useEffect(() => {
    if (!wasEdit && isEdit) {
      editField.current.focus();
    }
    if (wasEdit && !isEdit) {
      editBtn.current.focus();
    }
  }, [wasEdit, isEdit]);

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
      {isEdit ? <EditToDoForm todo={todo} editTodo={handleEdit} ref={editField} /> : <ShowToDoItem todo={todo} changeDone={changeDone} editTodo={() => setIsEdit(true)} removeTodo={removeTodo} ref={editBtn} /> }
    </div>
  );
};

export default ToDoItem;