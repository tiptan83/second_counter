import React from "react";
import "./App.css";

class Counter extends React.Component {
  state = {
    counter: 0,
    isRunning: false
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.isRunning) {
        this.setState({ counter: this.state.counter + 1 });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Seconds while counter has been active:</p>
          {this.state.counter}
          <br />
          <br />
          <span>
            <button onClick={e => this.setState({ isRunning: true })}>
              Start
            </button>
            <button onClick={e => this.setState({ isRunning: false })}>
              Stop
            </button>
          </span>
        </header>
      </div>
    );
  }
}

export default Counter;

