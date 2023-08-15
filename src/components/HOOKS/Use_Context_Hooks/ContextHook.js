import React from "react";
import ComponentI from "./ComponentI";

export const NameContext = React.createContext("Any name");
export const AgeContext = React.createContext("Any age");

export default function ContextHook() {
  return (
    <NameContext.Provider value="Shifat">
      <AgeContext.Provider value="25">
        <div>
          <ComponentI />
        </div>
      </AgeContext.Provider>
    </NameContext.Provider>
  );
}
