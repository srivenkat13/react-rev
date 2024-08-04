import React from "react";

const TodoItem = React.memo(({ task }) => {
  console.log(`Rendering task: ${task.text}`);

  return (
    <div>
      <input type="checkbox" checked={task.completed} readOnly />
      <span>{task.text}</span>
    </div>
  );
});

export default TodoItem;
