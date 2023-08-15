import React from "react";
import style from "./css/todo.module.css";
const TodoProject = ({ todo, id, onRemoveTodo }) => {
  const { title, desc } = todo;

  const handleClick = () => {
    onRemoveTodo(id);
  };

  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button
          className={style.btn}
          onClick={
            /*() => {
            handleClick(id);
          }*/
            handleClick
          }
        >
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
};

export default TodoProject;
