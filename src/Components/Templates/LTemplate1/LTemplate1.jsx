import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import styles from "./LTemplate1.module.scss";

class LTemplate1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="templateWrapper">
        <p>Hello World</p>
      </div>
    );
  }
}

export default LTemplate1;
