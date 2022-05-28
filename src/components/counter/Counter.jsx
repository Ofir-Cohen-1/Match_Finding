import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  render() {
    return (
      <div className="counter-container">
        <img
          src={require(`../../assets/${this.props.emoji}.png`)}
          width="90px"
          alt="thumb"
        />
        <h2>{this.props.counter}</h2>
      </div>
    );
  }
}

export default Counter;