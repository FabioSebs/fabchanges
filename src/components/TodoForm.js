import React, { useState, useEffect, useRef } from "react";

function TodoForm({ tasks, setTasks, onSubmit, id, setId }) {
  const [input, setInput] = useState("")
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus() //allow to start in typing position ready to input
  })

  const handleInput = e => {
    setId(e => ++e)
    setInput(e.target.value)
  }


  const handleSubmit = e => {
    e.preventDefault(); //function to stop the refresh when button clicked
    onSubmit(tasks)
    setTasks([...tasks, { id: id, text: input }])
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        name="text"
        className="task-input"
        onChange={handleInput}
        ref={inputRef}
      />
      <button className="task-button">TO DO</button>
    </form>
  );
}

export default TodoForm;
