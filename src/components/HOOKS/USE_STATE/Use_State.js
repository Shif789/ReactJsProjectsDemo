import React, { useState } from "react";

export default function Use_State() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    //setCount(count + 1); unsafe
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increase
      </button>
      {/*<button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        Increase
      </button>*/}
      {/*<button onClick={handleIncrease}>Increase</button>*/}
    </div>
  );
}
