import React, { Component } from "react";

export default class Key extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handle(this.props.value, this.props.className);
  }
  render() {
    return (
      <input
        type="button"
        value={this.props.value}
        className={this.props.className}
        onClick={this.handleClick}
      />
    );
  }
}
