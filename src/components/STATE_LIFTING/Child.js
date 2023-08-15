import React from "react";

export default function Child(props) {
  const { data2, onChildData } = props;
  let data = "I am from Child component";
  onChildData(data);
  return (
    <div>
      <p>I am child component</p>
      <p>{data2}</p>
    </div>
  );
}
