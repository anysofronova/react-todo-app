import React from "react";
import Todolist from "./Todo/Todolist";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: false, title: "Купить масло" },
    { id: 3, completed: false, title: "Купить молоко" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function deleteItem(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ deleteItem }}>
      <div className="wrapper">
        <h1>React Todo App</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <Todolist todos={todos} onToggle={toggleTodo} />
        ) : (
          <p className="finish">Good job!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
