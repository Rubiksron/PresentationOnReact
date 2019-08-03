import React, { Component } from "react";
import { render } from "react-dom";
import "./sass/main.scss";
import Form from "./Form.js"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      size: 'placeholder',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      size: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`You chose the ${this.state.size} pizza.`);
  }

  render() {
    return (
      <div>
        <Form size={ this.state.size }
              onChange={ this.handleChange }
              onSubmit={ this.handleSubmit }
        />
      </div>
    );
  }
}

export default App;
