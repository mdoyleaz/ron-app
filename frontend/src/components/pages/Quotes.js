import React, {Component} from "react";

import axios from 'axios';

class Quotes extends Component {
  state = {
    quotes: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:4000/api/quotes`)
    .then(response => {
      const quoteResponse = response.data.map(q => {
        return {
          id: q.id,
          quote: q.quote,
          rating: q.rating,
          sentenceLength: q.sentenceLength,
          voted: false
        }
      });

      const newQuoteState = Object.assign({}, this.state, {
        quotes: quoteResponse
      });

      this.setState(newQuoteState);
    })
    .catch(error => console.log(error))
  }

  render() {
    return (<div>
      <h2>Quotes</h2>
      <ul>
        {this.state.quotes.map((quote, index) => (<li key={index}>{quote.quote}</li>))}
      </ul>
    </div>);
  }
}

export default Quotes;
