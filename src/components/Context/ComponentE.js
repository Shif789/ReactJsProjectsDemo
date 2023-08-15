import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <>
        <h1>Component E Context {this.context}</h1> <ComponentF />
      </>
    );
  }
}
//ComponentE.contextType = UserContext;
export default ComponentE;
