import { Component } from "react";

class LifeCycle extends Component {
  // 1st, constructor is used for setting state by default
  state = {};
  constructor(props) {
    super(props);
    console.log("Contructor props:", props);
  }

  // 3rd, evaluates if the DOM is updated
  componentDidMount() {
    console.log("componentDidMount");
  }

  // When the state changes this is triggered
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate:", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Unmounting component", this.props, this.state);
  }

  // 2nd
  render() {
    console.log("Rendering Lifecycle");
    return <p>Este es un componente</p>;
  }
}

export default LifeCycle;
