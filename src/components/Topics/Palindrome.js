import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      Palindrome: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  palindromeCheck(userInput) {
    let re = /[^A-Za-z0-9]/g;
    let palindrome = "";
    let refinedInput = userInput.toLowerCase().replace(re, "");

    for (let i = 0; i < refinedInput.length / 2; i++) {
      if (refinedInput[i] !== refinedInput[refinedInput.length - 1 - i]) {
        palindrome = "false";
      } else {
        palindrome = "true";
      }
    }
    this.setState({ Palindrome: palindrome });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
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
            this.palindromeCheck(this.state.userInput);
          }}
        >
          Check
        </button>
        <span className="resultsBox"> Palindrome: {this.state.Palindrome}</span>
      </div>
    );
  }
}
