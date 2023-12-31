import React, { Component } from "react";

class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1>Hover Counter 2</h1>
        <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
      </div>
    );
  }
}

export default HoverCounterTwo;
