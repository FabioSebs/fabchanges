import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [value, setValue] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const addTask = (task) => {
    //function to add
    if (!task.text || /^\s*$/.test(task.text)) {
      //making sure that empty space doesn't get taken as an input
      return;
    }
    setTasks([...tasks, {id: task.id, text: task.text}]);
  };

  const updatedTask = (newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      //making sure that empty space doesn't get taken as an input
      // return;
    }

    if (newValue.length) {
      console.log("test")
      setTasks(prev => prev.map((item) => (item.text == newValue ? item.text = newValue : undefined)));
      return
    }

    // setTasks(prev => prev.map((item) => (item.id === taskId ? newInput : item)));
  };

  const completeTask = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    //function to delete
    const removeArray = [...tasks].filter((task) => task.id !== id);

    setTasks(removeArray);
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <TodoForm tasks={tasks} setTasks={setTasks} onSubmit={addTask} id={id} setId={setId}/>
      <select value={value} onChange={handleChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
      <Todo tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updatedTask} value={value} />
    </div>
  );
}

export default TodoList;
