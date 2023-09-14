import { Component } from "react";

class Button extends Component {
  render() {
    console.log("Executing render from Button");
    return <button>Send</button>;
  }
}

class LabelTextClicks extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("Unmounting component", this.props, this.state);
  }

  render() {
    return this.props.clicks === 0 ? (
      <p>clicks</p>
    ) : this.props.clicks === 1 || this.props.clicks === -1 ? (
      <p>click</p>
    ) : (
      <p>many clicks</p>
    );
  }
}

class FromComponent extends Component {
  state = { clicks: 0 };

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate:", prevProps, prevState);
  }

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
        <span>
          You have{" "}
          {this.state.clicks < 2 ? (
            <LabelTextClicks clicks={this.state.clicks} />
          ) : null}
        </span>
      </div>
    );
  }
}

export default FromComponent;
