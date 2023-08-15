import React, { Component } from "react";

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class HOC extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + incrementNumber,
      }));
    };
    render() {
      return (
        <>
          <OriginalComponent
            //name="Shifat"
            //name={this.props.name}
            count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}
          />
        </>
      );
    }
  }
  return HOC;
};

export default UpdatedComponent;
