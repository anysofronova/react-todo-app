import React from "react";
import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

function Todolist(props) {
  return (
    <ul>
      {props.todos.map((todo, idx) => {
        return <TodoItem todo={todo} key={todo.id} idx={idx} />;
      })}
    </ul>
  );
}
Todolist.PropTypes = {
  todos: PropTypes.array,
};

export default Todolist;
