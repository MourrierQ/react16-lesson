import React, { PureComponent } from "react";
import classes from "./App.css";

import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";

//Only use pure components if you KNOW that an update might not be required !!
class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] into constructor", props);
    this.state = {
      persons: [
        { id: "asf1", name: "Max", age: 28 },
        { id: "asf2", name: "Manu", age: 29 },
        { id: "asf3", name: "Stephanie", age: 26 }
      ],
      otherstate: "someOtherValue",
      showPersons: false
    };
  }

  // state = {
  //   persons: [
  //     { id: "asf1", name: "Max", age: 28 },
  //     { id: "asf2", name: "Manu", age: 29 },
  //     { id: "asf3", name: "Stephanie", age: 26 }
  //   ],
  //   otherstate: "someOtherValue",
  //   showPersons: false
  // };

  componentWillMount() {
    console.log("[App.js] Inside willmount");
  }

  componentDidMount() {
    console.log("[App.js] Inside didmount");
  }

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log(
  //     "UPDATE [App.js] Inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // };

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "UPDATE [App.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("UPDATE [App.js] Inside componentDidUpdate");
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
    console.log("[App.js] inside Render");
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
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
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
