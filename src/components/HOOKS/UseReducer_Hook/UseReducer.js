import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const handleReset = () => {
    dispatch("reset");
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increase
      </button>
      <button onClick={() => dispatch("decrement")}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default UseReducer;
