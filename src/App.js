import React, { Component } from "react";
import "./Style.css";
import Calclator from "./components/Calclator";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
    };
    this.handleEqual = this.handleEqual.bind(this);
  }
  handleEqual(value, className) {
    if (className === `operator AC`) {
      this.setState({
        output: "",
      });
    } else if (className === `operator DEL`) {
      this.setState({
        output: this.state.output.slice(0, -1),
      });
    } else if (className === `equal`) {
      this.setState({
        output: eval(this.state.output),
      });
    } else {
      this.setState({
        output: `${this.state.output}${value}`,
      });
    }
  }
  render() {
    return (
      <>
        <body>
          <Calclator output={this.state.output} handle={this.handleEqual} />
        </body>
      </>
    );
  }
}
