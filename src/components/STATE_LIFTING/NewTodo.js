import React, { useState } from "react";

export default function NewTodo({ onAddTodo }) {
  const [item, setItem] = useState("");
  const HandleItem = (e) => {
    setItem(e.target.value);
  };
  const handleSubmit = (e) => {
    onAddTodo(item);
    e.preventDefault();
  };
  return (
    <div>
      I am NewTodo
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todoItem">Item: </label>
          <input id="todoItem" onChange={HandleItem} type="text" value={item} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
