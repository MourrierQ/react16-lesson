import React, { Component } from "react";
import classes from "./App.css";

import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "asf1", name: "Max", age: 28 },
      { id: "asf2", name: "Manu", age: 29 },
      { id: "asf3", name: "Stephanie", age: 26 }
    ],
    otherstate: "someOtherValue",
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]; //Copy the array's content. State stays immutable that way
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => id === p.id);
    const person = { ...this.state.persons[personIndex] }; //IMMUTABLE !!!!

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }
    return (
      <div className={classes.App}>
        <Cockpit
          show={this.state.showPersons}
          clicked={this.togglePersonsHandler}
          persons={this.state.persons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
