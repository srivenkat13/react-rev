import React, { useCallback, useState } from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Take Ticket", completed: false },
    { id: 2, text: "Board Train", completed: false },
  ]);

  const addTask = useCallback((text) => {
    setTasks((prevTask) => [
      { id: prevTask.length + 1, text, completed: false },
      ...prevTask,
    ]);
  }, []);

  return (
    <>
      <h1>Todo List</h1>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}

      <button onClick={() => addTask("New Task")}>Add new Task</button>
    </>
  );
};

export default TodoList;
