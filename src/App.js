import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi i'm a react app</h1>
        <Person name="tom" />
        <Person name="john">test</Person>
        <Person name="JC" age={18} />
      </div>
    );
  }
}

export default App;
