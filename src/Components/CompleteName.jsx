import { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.props.onChange}
        type="text"
      />
    );
  }
}

class CompleteName extends Component {
  state = {
    name: "",
    surname: "",
  };

  // this is a property, not a method, when you pass a method to a child, it can change
  updatValues = (prop, value) => {
    this.setState({ [prop]: value });
  };

  // Always let the parent controls the children's state
  render() {
    return (
      <>
        <h1>Input your name</h1>
        <Input
          value={this.state.name}
          onChange={(e) => this.updatValues("name", e.target.value)}
        />
        <Input
          value={this.state.surname}
          onChange={(e) => this.updatValues("surname", e.target.value)}
        />
        <p>Your complete name: {`${this.state.name} ${this.state.surname}`}</p>
      </>
    );
  }
}

export default CompleteName;
