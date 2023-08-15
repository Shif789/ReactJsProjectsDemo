import React, { useContext } from "react";
import { AgeContext, NameContext } from "./ContextHook";

export default function ComponentJ() {
  const name = useContext(NameContext);
  const age = useContext(AgeContext);
  return (
    <h1>
      {name} whose age is {age} from ComponentJ
    </h1>
  );
}
