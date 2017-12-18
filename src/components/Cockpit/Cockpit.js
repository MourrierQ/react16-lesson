import React from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  let btnClass = "";
  if (props.show) btnClass = classes.red;

  return (
    <div className={classes.Cockpit}>
      <h1>Hi i'm a react app</h1>
      <p className={assignedClasses.join(" ")}>It's working</p>
      <button className={btnClass} onClick={() => props.clicked()}>
        Switch name
      </button>
    </div>
  );
};

export default Cockpit;
