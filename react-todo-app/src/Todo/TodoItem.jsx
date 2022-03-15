import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, idx }) => {
  return (
    <li>
      <span>
        <input type="checkbox" onChange={() => console.log(todo.id)} />
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
};
export default TodoItem;
