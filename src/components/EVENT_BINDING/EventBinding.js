import React, { Component } from "react";

export default class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.handleIncrease = this.handleIncrease.bind(this);
  }
  /*
  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };*/
  handleIncrease() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrease /*.bind(this)*/}>increase</button>
      </>
    );
  }
}
