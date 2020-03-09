import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: ["Antione", "Obdulia", "Libby", "Cherlyn", "Albertina"],
      userInput: "",
      FilteredArray: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filteredArray(userInput) {
    let filteredNames = [];
    let names = this.state.unFilteredArray;

    for (let i = 0; i < names.length; i++) {
      const element = names[i];
      if (element.includes(userInput)) {
        filteredNames.push(element);
      }
    }

    this.setState({ filteredArray: filteredNames });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          type="text"
          className="inputLine"
          onChange={e => {
            this.handleChange(e.target.value);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.filteredArray(this.state.userInput);
          }}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}
