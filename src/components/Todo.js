import React, { useState, useEffect } from "react";
import TodoFormE from "./TodoFormE";
import { CgCloseO } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/task";

function Todo() {
  const [singleTask, setSingleTask] = useState({})
  const tasks = useSelector((state) => state.tasks.value)
  const [editMode, setEditMode] = useState(false)
  const dispatch = useDispatch()

  function initiateEditMode(task) {
    setSingleTask(task)
    setEditMode(true)
  }


  if (editMode) {
    return <TodoFormE task={singleTask} setTask={setSingleTask} setEditMode={setEditMode}/>
  }

  else {
    return <>
      {tasks.map((task) => (
        <div className={task?.isCompleted ? "task-row complete" : "task-row"} key={task.id}>
          {/* TEXT */}
          <div key={task.id}>
            {task.text}
          </div>

          {/* SIDE ICONS */}
          <div className="icon">
            <CgCloseO onClick={() => dispatch(removeTask(task))} className="delete-icon" />
            <FiEdit onClick={() => initiateEditMode(task)} className="edit-icon" />
          </div>
        </div>
      ))}
    </>
  }

}


export default Todo;
