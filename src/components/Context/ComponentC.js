import React, { Component } from "react";
import ComponentE from "./ComponentE";
import { LastNameContext, UserProvider } from "./userContext";

class ComponentC extends Component {
  render() {
    return (
      <>
        <UserProvider value="Shifat">
          <LastNameContext.Provider value="Hossain">
            <h1>From Component C</h1>
            <ComponentE />
          </LastNameContext.Provider>
        </UserProvider>
      </>
    );
  }
}

export default ComponentC;
