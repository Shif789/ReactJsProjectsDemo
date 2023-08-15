import React from "react";
import style from "./css/todos.module.css";
import TodoProject from "./TodoProject";

const TodosProject = (props) => {
  const { todos, onRemoveTodo } = props;
  return (
    <section className={style.todos}>
      {todos.map((todo) => (
        <TodoProject
          key={todo.id}
          todo={todo.newTodo}
          id={todo.id}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </section>
  );
};

export default TodosProject;
