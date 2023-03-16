import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [value, setValue] = useState("all");

  return (
    <div>
      <h1>TODO LIST</h1>
      <TodoForm />
      <select value={value} onChange={e => setValue(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
      <Todo />
    </div>
  );
}

export default TodoList;
