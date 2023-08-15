import React, { useState } from "react";
import style from "./css/addTodo.module.css";
const AddTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const handleChange = (e) => {
    setTodo((prevTodo) => ({ ...prevTodo, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    console.log(todo);
    props.onAddTodos(todo);
    e.preventDefault();
    setTodo({ title: "", desc: "" });
  };
  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
          <label htmlFor="title">Title: </label>
          <input
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
            value={title}
          />
        </div>
        <div className={style["form-field"]}>
          <label htmlFor="desc">Description: </label>
          <textarea
            onChange={handleChange}
            type="text"
            id="desc"
            name="desc"
            value={desc}
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
