import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] into constructor", props);
  }
  componentWillMount() {
    console.log("[Person.js] Inside willmount");
  }

  componentDidMount() {
    console.log("[Person.js] Inside didmount");
  }

  render() {
    console.log("[Person.js] inside Render");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
