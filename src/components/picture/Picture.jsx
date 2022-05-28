import React, { Component } from "react";

import "./Picture.css";

class Picture extends Component {
  render() {
    return (
      <>
        {this.props.dog && (
          <div className="container">
            <h2>{this.props.dog.breed}</h2>
            <div
              className="dog-img"
              style={{ backgroundImage: `url(${this.props.dog.img})` }}
            ></div>
          </div>
        )}
      </>
    );
  }
}

export default Picture;