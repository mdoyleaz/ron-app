import React, {Component} from "react";
import {ButtonGroup, Card} from 'react-bootstrap'
import Rating from "react-rating"
import FetchButton from "../actions/FetchButton"

class Home extends Component {
  state = {
    quote: {}
  }

  grabQuote = (quote) => {
    this.setState({quote: quote})
  }

  AddRating = () => {
  }

  render() {
    let rating;
    if (this.state.quote.rating >= 0) {
      rating = <Rating
        initialRating={this.state.quote.rating} />
    }
    return (<div className="container">
      <Card style={{
          width: '40%',
          height: '100%'
        }}>
        <h2>Home</h2>
        <Card.Title>Rons quotes Home page</Card.Title>
        <Card.Text>
          <span>{this.state.quote.quote}</span>
        </Card.Text>
        <Card.Text>  {rating}</Card.Text>
        <div className="d-flex flex-column">
          <ButtonGroup className="mt-3">
            <FetchButton grabQuote={this.grabQuote} option={"Small"}/>
            <FetchButton grabQuote={this.grabQuote} option={"Medium"}/>
            <FetchButton grabQuote={this.grabQuote} option={"Large"}/>
          </ButtonGroup>
        </div>
      </Card>
    </div>);
  }
}

export default Home;
