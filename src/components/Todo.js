import React, { useState } from "react";
import TodoFormE from "./TodoFormE";
import { CgCloseO } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";

function Todo({ tasks, completeTask, removeTask, updateTask, value }) {
  const [update, setUpdate] = useState("")
  const [editMode, setEditMode] = useState(false)

  const SubmitUpdate = (update) => {
    updateTask(update.id, update.value)
  }

  function handleEdit(text) {
    setEditMode(true)
    setUpdate(text)
    updateTask(text)

  }

  function filter(completed, show) {
    //determines if the task should be show or not
    if (show == "all") {
      return true
    } else if (show == "completed") {
      if (completed)
        return true
    } else if (show == "incompleted") {
      if (!completed)
        return true
    } else {
      return false
    }

  }

  // if(editMode) {
  //   return <TodoFormE update={update} setUpdate={setUpdate} updateTasks={updateTask} setEditMode={setEditMode}/>;
  // }
  return <>
    {editMode ? <TodoFormE update={update} setUpdate={setUpdate} updateTasks={updateTask} setEditMode={setEditMode} /> : tasks.map((task, index) => (
      //checks if the task should be shown and shows if is true
      filter(task.isComplete, value) == true &&
      <div
        className={task.isComplete ? "task-row complete" : "task-row"}
        key={index}
      >

        <div key={task.id} onClick={() => completeTask(task.id)}>
          {task.text}
        </div>
        <div className="icon">
          <CgCloseO onClick={() => removeTask(task.id)} className="delete-icon" />
          <FiEdit
            onClick={() => handleEdit(task.text)}
            className="edit-icon"
          />
        </div>
      </div>

    ))}
  </>

  // return tasks.map((task, index) => (
  //   //checks if the task should be shown and shows if is true
  //   filter(task.isComplete,value) == true &&
  //   <div
  //     className={task.isComplete ? "task-row complete" : "task-row"}
  //     key={index}
  //   >

  //     <div key={task.id} onClick={() => completeTask(task.id)}>
  //       {task.text}
  //     </div>
  //     <div className="icon">
  //       <CgCloseO onClick={() => removeTask(task.id)} className="delete-icon" />
  //       <FiEdit
  //         onClick={() => handleEdit(task.text)} 
  //         className="edit-icon"
  //       />
  //     </div>
  //   </div>

  // ));
}


export default Todo;
