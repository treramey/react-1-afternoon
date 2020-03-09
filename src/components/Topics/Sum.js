import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 2,
      sum: null
    };
  }

  sumNumbers(number1, number2) {
    let total = parseInt(number1, 10) + parseInt(number2, 10);
    this.setState({ sum: total });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          type="text"
          className="inputLine"
          onChange={e => {
            this.setState({ number1: e.target.value });
          }}
        />
        <input
          type="text"
          className="inputLine"
          onChange={e => {
            this.setState({ number2: e.target.value });
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.sumNumbers(this.state.number1, this.state.number2);
          }}
        >
          Add
        </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    );
  }
}
