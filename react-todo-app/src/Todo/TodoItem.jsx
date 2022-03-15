import React from "react";

export const TodoItem = ({ todo, idx }) => {
  return (
    <li>
      <strong>{idx + 1}</strong>
      &nbsp;
      {todo.title}
    </li>
  );
};
