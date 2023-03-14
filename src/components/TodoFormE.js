import React, { useState, useEffect, useRef } from "react";

function TodoFormE({ update, setUpdate, updateTasks, setEditMode }) {
  const inputRef = useRef(null)
  const [id, setId] = useState(0);

  useEffect(() => {
    inputRef.current.focus() //allow to start in typing position ready to input
  })

  const handleSubmit = e => {
    e.preventDefault(); //function to stop the refresh when button clicked
    setEditMode(false)
    updateTasks(update)
    // setUpdate("")
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Edit Task"
        name="text"
        className="task-input"
        onChange={e => setUpdate(e.target.value)}
        ref={inputRef}
      />
      <button className="task-button">EDIT</button>
    </form>
  );
}

export default TodoFormE;
