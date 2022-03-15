import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const TodoItem = ({ todo, idx, onChange }) => {
  const { deleteItem } = useContext(Context);
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
      <button className="close_button" onClick={() => deleteItem(todo.id)}>
        &times;
      </button>
    </li>
  );
};
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  idx: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default TodoItem;
