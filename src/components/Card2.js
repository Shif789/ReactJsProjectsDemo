import React, { Component } from "react";

export default class Card2 extends Component {
  render() {
    return (
      <div className="card">
        <h3 className="cardTitle">{this.props.name}</h3>
        <p className="cardDesc">{this.props.desc}</p>
      </div>
    );
  }
}
