import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';

class FetchButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false,
      quote: {}
    };
  }

  handleClick() {
    this.setState({ isLoading: true })
    axios.get(`http://127.0.0.01:4000/api/quotes/length/${this.props.option.toLowerCase()}`)
      .then(response => {

        const randIndex = Math.floor(Math.random() * response.data.length)
        const randomQuote = response.data[randIndex]
        this.setState({ isLoading: false });

        this.props.grabQuote(randomQuote)
      })
      .catch(error => console.log(error))
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <Button
          variant="secondary"
          disabled={isLoading}
          onClick={!isLoading ? this.handleClick : null}
        >
          {isLoading ? 'Loading…' : this.props.option}
        </Button>
      </div >
    );
  }
}

export default FetchButton;
