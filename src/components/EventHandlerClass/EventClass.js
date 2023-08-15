import React, { Component } from "react";

export default class EventClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedValue: "",
    };
  }

  handleOnChange = (e) => {
    this.setState(
      (prevState) => ({
        //changedValue: e.target.value
        changedValue: (prevState = e.target.value),
      }),
      () => {
        console.log(this.state.changedValue);
      }
    );
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} />
        <h3>{this.state.changedValue}</h3>
      </div>
    );
  }
}
