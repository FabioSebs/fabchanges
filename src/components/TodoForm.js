import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from "../redux/task";
import { incrementId } from "../redux/id";

//This has to take input from user and insert into task list 
function TodoForm() {
  const [input, setInput] = useState({})
  const id = useSelector((state) => state.id.value)
  const inputRef = useRef(null)
  const dispatch = useDispatch()

  //allow to start in typing position ready to input
  useEffect(() => {
    inputRef.current.focus()
  })

  const handleInput = e => {
    setInput(prev => ({ ...prev, text: e.target.value }))
  }


  const handleSubmit = () => {
    setInput(prev => ({ ...prev, id: id }))
    dispatch(incrementId())
    console.log(input)
    dispatch(addTask(input))
    setInput(prev => ({ ...prev, text: "" }))
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Add a task"
        name="text"
        className="task-input"
        onChange={handleInput}
        ref={inputRef}
        value={input.text}
      />
      <button type="button" className="task-button" onClick={() => handleSubmit()}>TO DO</button>
    </div>
  );
}

export default TodoForm;
