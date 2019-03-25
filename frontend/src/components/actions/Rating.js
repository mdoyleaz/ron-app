import "../../css/index.css"

import React, {Component} from "react";
import Rating from "react-rating";
import axios from 'axios';
import Cookies from "./Cookies"

class QuoteRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.rating
    };
  };

  // Adds rating to backend, as well as adds rating ID to cookies
  addRating = (rating) => {
    const postRating = {
      id: this.props.id,
      rating: rating
    }
    axios.post('http://127.0.0.1:4000/api/quotes/rate', postRating).then(response => {
      if (response.data.accepted) {
        // Cookies.deleteCookies("votedIds")
        Cookies.writeCookie("votedIds", this.props.id)
        this.updateRating()
      }
    }).catch(error => console.log(error))
  };

  // Updates state once vote has been submitted
  updateRating = () => {
    axios.get(`http://127.0.0.1:4000/api/quotes/${this.props.id}`).then(response => {
      this.setState({rating: response.data.rating})
    }).catch(error => console.log(error))
  }

  render() {
    const verifyCookies = Cookies.getCookies('votedIds'); // Creates a boolean value if cookies exist

    console.log(`Props Rating: ${this.props.rating} `)
    console.log(`State Rating: ${this.state.rating}`)

    // Determins if quote ID is already stored in cookied
    if (!(verifyCookies.includes(this.props.id))) {
      return <Rating
        initialRating={this.props.rating}
        onClick={rate => this.addRating(rate)}
        emptySymbol={<img alt="star" src = "/img/rating/star-empty.png" className="icon" />}
        fullSymbol={<img alt="star" src="/img/rating/star-full.png" className="icon" />} />
    } else {
      return (<div>
        <Rating
          initialRating={this.state.rating}
          readonly={true}
          emptySymbol={<img alt="star" src="/img/rating/star-empty.png" className="icon" />}
          fullSymbol={<img alt="star" src="/img/rating/star-full.png" className="icon" />} />
        <i className="fas fa-check-circle fa"></i>
      </div>)
    }
  }
}

export default QuoteRating;
