import React, { Component } from "react";

import "./Main.css";
import data from "../../Data";
import Counter from "../counter/Counter";
import Picture from "../picture/Picture";
import Button from "../button/Button";

class Main extends Component {
  state = {
    data: data[0],
    currImage: 0,
    up: 0,
    down: 0,
    matchEnd: false,
  };

  componentDidMount() {
    this.setState({ data: data });
  }

  handleRejectClick = () => {
    this.setState((prev) => {
      return {
        down: prev.down + 1,
        currImage: prev.currImage + 1,
        matchEnd: prev.currImage === 4 ? true : false,
      };
    });
    console.log(this.state.currImage);
  };

  handleApprovalClick = () => {
    this.setState((prev) => {
      return {
        up: prev.up + 1,
        currImage: prev.currImage + 1,
        matchEnd: prev.currImage === 4 ? true : false,
      };
    });
    console.log(this.state.currImage);
  };

  finalMsg = () => {
    if (this.state.up > this.state.down) {
      return <h1>Great! You love dogs like me</h1>;
    } else {
      return <h1>What a bummer! You dont like dogs</h1>;
    }
  };
  
  render() {
    return (
      <div className="main-container">
        {this.state.matchEnd ? (
          this.finalMsg()
        ) : (
          <>
            <div className="counters-container">
              <Counter counter={this.state.down} emoji="thumbs-down-icon" />
              <Counter counter={this.state.up} emoji="Thumb-up-emoji" />
            </div>
            <Picture dog={this.state.data[this.state.currImage]} />
            <div className="buttons-container">
              <Button type="reject" onClick={this.handleRejectClick} />
              <Button type="approval" onClick={this.handleApprovalClick} />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Main;
