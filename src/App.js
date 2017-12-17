import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

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
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      btnClass = classes.red;
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                change={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className={classes.App}>
        <h1>Hi i'm a react app</h1>
        <p className={assignedClasses.join(" ")}>It's working</p>
        <button
          className={btnClass}
          onClick={() => this.togglePersonsHandler()}
        >
          Switch name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
