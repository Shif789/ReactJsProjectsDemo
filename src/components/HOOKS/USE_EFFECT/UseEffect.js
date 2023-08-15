import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [isLodaing, setIsLoading] = useState(false);

  const handleIncrease = () => {
    setCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    console.log("useEffect");
  }, [count, isLodaing]);
  return (
    <div>
      {console.log("render")}
      Count: {count}
      <button onClick={handleIncrease}>Increase</button>
      <button
        onClick={() => {
          setIsLoading((prevState) => !prevState);
        }}
      >
        Click
      </button>
    </div>
  );
}
