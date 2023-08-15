import React, { Component } from "react";

class Render_Props extends Component {
  render() {
    return <div>{this.props.render(true)}</div>;
  }
}

export default Render_Props;
