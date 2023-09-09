import { Component } from "react";

class Button extends Component {
  render() {
    console.log("Executing render from Button");
    return <button>Send</button>;
  }
}

class LabelTextClicks extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (this.props.clicks == 0) {
      return <p>clicks</p>
    } else if (this.props.clicks == 1 || this.props.clicks == -1) {
      return <p>click</p> 
    } else {
      return <p>clicks</p>
    }
  }
}

class FromComponent extends Component {
  state = { clicks: 0 };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Counter: {this.state.clicks}</h1>
        <Button />
        <button
          onClick={() => this.setState({ clicks: this.state.clicks + 1 })}
        >
          Add click
        </button>
        <span>You have <LabelTextClicks /> </span>
      </div>
    );
  }
}

export default FromComponent;
