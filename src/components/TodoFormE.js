import React, { useState, useEffect, useRef } from "react";
import { useDispatch , useSelector} from "react-redux";
import { updateTask } from "../redux/task";

function TodoFormE({task, setTask, setEditMode}) {
  const dispatch = useDispatch()
  const inputRef = useRef(null)

  //allow to start in typing position ready to input
  useEffect(() => {
    inputRef.current.focus() 
  })

  const handleSubmit = () => {
    setEditMode(false);
    console.log(task)
    dispatch(updateTask(task))
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Edit Task"
        name="text"
        className="task-input"
        onChange={e => setTask(prev => ({...prev, text: e.target.value}))}
        ref={inputRef}
      />
      <button type="button" onClick={() => handleSubmit()} className="task-button">EDIT</button>
    </div>
  );
}

export default TodoFormE;
