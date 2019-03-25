import "../../css/index.css"
import React, {Component} from "react";
import {ButtonGroup, Card, Container} from 'react-bootstrap'
import FetchButton from "../actions/FetchButton";
import QuoteRating from "../actions/Rating";

class Home extends Component {
  state = {
    quote: {},
    size: null
  }

  // Used to pass data back from FetchButton and set state with new quote
  grabQuote = (quote, size) => {
    this.setState({quote: quote, size: size})
  }

  // Checks if quote already resides in state
  createRating = () => {
    if (this.state.quote.quote) {
      return <QuoteRating rating={this.state.quote.rating} id={this.state.quote.id}/>
    } else
      return <Card.Text>Select size of quote to retreive</Card.Text>
  }

  render() {
    return (<Container>
      <Card className="mx-auto fluid ">
        <Card.Header>Ron Swanson Quotes</Card.Header>
        <div className="card-container text-center vertical-center">
          {
            this.state.size != null && <Container className="text-center row">
                <Card.Text className="col-lg">{`Quote size: ${this.state.size}`}</Card.Text>
                <Card.Text className="col-lg">{`Quote ID: ${this.state.quote.id}`}</Card.Text>
              </Container>
          }
          <Card.Text>
            <span>{this.state.quote.quote}</span>
          </Card.Text>
          {this.createRating()}
          <div className="d-flex flex-column">
            <ButtonGroup className="mt-3 mx-auto">
              <FetchButton grabQuote={this.grabQuote} option={"Small"}/>
              <FetchButton grabQuote={this.grabQuote} option={"Medium"}/>
              <FetchButton grabQuote={this.grabQuote} option={"Large"}/>
            </ButtonGroup>
          </div>
        </div>
      </Card>
    </Container>);
  }
}

export default Home;
