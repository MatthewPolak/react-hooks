import React from "react";

export default class Hello extends React.Component {
  state = { name: "World" };

  handleChange = ({ target: { value } }) => {
    this.setState({ name: value.toUpperCase() });
  };

  render() {
    return (
      <>
        <h1>Hello {this.state.name}!</h1>
        <input onChange={this.handleChange} />
      </>
    );
  }
}
