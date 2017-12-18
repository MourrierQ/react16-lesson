import React, { Component } from "react";

//Will show a nice error message in production mode but !!!!!! NOT IN DEV !!!!!
//Only use for cases where you know that it might fail and that you cannot do anything about it
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.error) return <h1>{this.state.errorMessage}</h1>;
    return this.props.children;
  }
}

export default ErrorBoundary;
