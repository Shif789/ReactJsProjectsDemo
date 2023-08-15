import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
export default function Home() {
  const dummyTodos = ["todo1", "todo2"];
  const [todos, setTodos] = useState(dummyTodos);
  const HandleAddTodo = (newTodoItem) => {
    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
    //setTodos(todos.push(newTodoItem));
  };
  return (
    <div>
      <NewTodo onAddTodo={HandleAddTodo} />
      <Todos todos={todos} />
    </div>
  );
}
