import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, idx, onChange }) => {
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <strong>{idx + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button>&times;</button>
    </li>
  );
};
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  idx: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default TodoItem;
