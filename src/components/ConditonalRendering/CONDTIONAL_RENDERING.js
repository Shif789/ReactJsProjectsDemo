import React, { Component } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

export default class CONDTIONAL_RENDERING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    /*let element;
    if (this.state.isLoggedIn) {
      //return <HomePage />;
      element = <HomePage />;
    } else {
      //return <LoginPage />;
      element = <LoginPage />;
    }
    return <>{element}</>;*/

    return <>{this.state.isLoggedIn ? <HomePage /> : <LoginPage />}</>;
  }
}
