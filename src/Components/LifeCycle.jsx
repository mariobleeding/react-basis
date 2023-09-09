import { Component } from "react";

class LifeCycle extends Component {
  // 1st, setting state
  constructor(props) {
    super(props);
    console.log("Contructor", props);
  }

  // 3rd, evaluates if the DOM is updated
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate:");
  }

  // 2nd
  render() {
    console.log("Rendering Lifecycle");
    return <p>Este es un componente</p>;
  }
}

export default LifeCycle;
