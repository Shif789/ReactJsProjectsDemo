import React, { Component } from "react";
import ComponentG from "./ComponentG";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => (
          <>
            <h1>Hello {username} from Component F</h1>
            <ComponentG />
          </>
        )}
      </UserConsumer>
    );
  }
}

export default ComponentF;
