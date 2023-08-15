import React, { useEffect, useState } from "react";

const loadingMessage = <p>Todos is loading</p>;

export default function DataFetch() {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          if (!res.ok) {
            throw Error("Fetching is not successful");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setTodos((prevTodos) => data);
          setIsLoading((prevIsLoading) => false);
          setError((prevError) => null);
        })
        .catch((error) => {
          setError((prevError) => error.message);
          setIsLoading((prevIsLoading) => false);
        });
    }, 2000);
  }, []);
  const todosElement =
    todos && todos.map((todo) => <p key={todo.id}>{todo.title}</p>);
  return (
    <div>
      <h1>DataFetch Todos</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
}
