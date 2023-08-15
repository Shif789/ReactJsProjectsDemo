import React from "react";
import useFetchHook from "./useFetchHook";

export default function CustomHooks() {
  const { data, isLoading, error } = useFetchHook(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const loadingMessage = <p>Todos is loading</p>;
  const errorMessage = <p>{error}</p>;
  const todosElement =
    data && data.map((todo) => <p key={todo.id}>{todo.title}</p>);
  return (
    <div>
      <h1>DataFetch Todos</h1>
      {error && errorMessage}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
}
