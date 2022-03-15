import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function Todolist(props) {
  return (
    <ul>
      {props.todos.map((todo, idx) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            idx={idx}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}
Todolist.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Todolist;
