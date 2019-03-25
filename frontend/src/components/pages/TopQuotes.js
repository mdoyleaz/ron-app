import "../../css/index.css"

import React, {Component} from "react";
import {Table} from 'react-bootstrap'
import Rating from "react-rating";

import axios from 'axios';

class TopQuotes extends Component {
  state = {
    topQuotes: []
  }

  sortTopQuotes = (quotes) => {
    const topQuotes = quotes.sort(
      (a, b) => (a.rating < b.rating)
      ? 1
      : -1)
    this.setState({
      topQuotes: topQuotes.slice(0, 10)
    })
  }
  componentDidMount = () => {
    axios.get(`http://127.0.0.1:4000/api/quotes`).then(response => {
      const quoteResponse = response.data.map(q => {
        return {id: q.id, quote: q.quote, rating: q.rating, sentenceLength: q.sentenceLength, voted: false}
      });

      this.sortTopQuotes(quoteResponse)
    }).catch(error => console.log(error))
  }

  render() {
    return (<div>
      <h2>Top 10 Quotes</h2>
      <Table striped="striped" bordered="bordered" hover="hover" size="sm" responsive="true">
        <thead>
          <tr>
            <th>#</th>
            <th>Quote</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.topQuotes.map((quote, index) => (<tr key={index}>
              <td>{index+1}</td>
              <td>{quote.quote}</td>
              <td>
                <div className="container-rating">
                <Rating
                  initialRating={quote.rating}
                  readonly={true}
                  emptySymbol={<img alt="star" src="/img/rating/star-empty.png" className="icon rating-img" />}
                  fullSymbol={<img alt="star" src="/img/rating/star-full.png" className="icon rating-img" />} />
                </div>
              </td>
            </tr>))
          }
        </tbody>
      </Table>
    </div>);
  }
}

export default TopQuotes;
