import React, { Component } from "react";
import UpdatedComponent from "./HOC";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>
          {this.props.name} Hovered {count} times
        </h1>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter, 5);
