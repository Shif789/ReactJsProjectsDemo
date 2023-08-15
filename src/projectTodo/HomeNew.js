import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AddTodo from "./AddTodo";
import style from "./css/home.module.css";
import TodosProject from "./TodosProject";

const HomeNew = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodos = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), newTodo }]);
  };
  const handleRemoveTodo = (id) => {
    //const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };
  console.log(todos);
  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <AddTodo onAddTodos={handleAddTodos} />
      <TodosProject todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default HomeNew;
