import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: [{ name: "Jonathan", age: 33 }, { name: "Pam", age: 65 }],
      userInput: "",
      stopType: "",
      exitResponse: "",
      copy: "",
      doubleClick: ""
    };
  }

  switchNameHandler = () => {
    this.setState({
      person: [{ name: "Alex", age: 31 }, { name: "Pam", age: 65 }]
    });
  };

  handleChange = value => {
    this.setState({
      userInput: value
    });
  };

  enterBoxHandler = () => {
    return "You have entered the ThunderDome";
  };

  exitBoxHandler = () => {
    alert("see ya next time");
  };

  stopTypeHandler = () => {
    this.setState({
      stopType: "Can't touch this"
    });
  };

  exitBoxHandler = () => {
    this.setState({
      exitResponse: "See ya next time"
    });
  };

  copyHandler = () => {
    this.setState({
      copy: "Caught you!!"
    });
  };

  doubleClickHandler = () => {
    this.setState({
      doubleClick: (
        <iframe
          className="fishgif"
          src="https://giphy.com/embed/8TFtMzqmrRkCJ7uGLg"
          frameBorder="0"
        />
      )
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="header">Event Handler Examples</h1>

        <div className="mainbody">
          <div className="first">
            <div className="box">
              <h3>On-Click</h3>
              <button
                className="button"
                onClick={() => this.switchNameHandler()}
              >
                Click to Change Jonathan to Alex
              </button>
              <p>
                I'm {this.state.person[0].name} and I'm{" "}
                {this.state.person[0].age} yrs old.
              </p>
            </div>

            <div className="box">
              <h3>On-Change</h3>
              <input
                className="inputbox"
                onChange={e => {
                  this.handleChange(e.target.value);
                }}
                placeholder="Type here to display below"
              />
              <p>{this.state.userInput}</p>
            </div>
          </div>

          <div className="second">
            <div className="box">
              <h3>On-Mouse-Enter</h3>
              <input
                className="inputbox"
                onMouseEnter={() => alert(this.enterBoxHandler())}
                placeholder="Enter at your own Risk"
              />
            </div>

            <div className="box">
              <h3>On-Change</h3>
              <input
                className="inputbox"
                onChange={() => {
                  this.stopTypeHandler();
                }}
                placeholder="Type to see response"
              />
              <p>{this.state.stopType}</p>
            </div>
          </div>

          <div className="third">
            <div className="box">
              <h3>On-Mouse-Leave</h3>
              <input
                className="inputbox"
                onMouseLeave={() => {
                  this.exitBoxHandler();
                }}
                placeholder="Exit box to see response"
              />
              <p>{this.state.exitResponse}</p>
            </div>

            <div className="box">
              <h3>On-Copy</h3>
              <p
                onCopy={() => {
                  this.copyHandler();
                }}
              >
                {" "}
                Copy me
              </p>
              <p>{this.state.copy}</p>
            </div>
          </div>

          <div className="fourth">
            <div className="largebox">
              <div className="fourtext">
                <h3>Double-Click</h3>
                <p
                  onDoubleClick={() => {
                    this.doubleClickHandler();
                  }}
                >
                  Double-Click me for gif
                </p>
                <p>{this.state.doubleClick}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
