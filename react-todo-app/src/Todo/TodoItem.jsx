import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, idx }) => {
  return (
    <li>
      <strong>{idx + 1}</strong>
      &nbsp;
      {todo.title}
    </li>
  );
};
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  idx: PropTypes.number,
};
export default TodoItem;
