import React, {Component} from "react";
import {Container, Jumbotron} from 'react-bootstrap'
import axios from 'axios'


class Home extends Component {
  state = {
    quote: null
  }

  handleClick = () => {
    const randIndex = Math.floor(Math.random() * 59)

    axios.get(`http://127.0.0.1:4000/api/quotes/${randIndex}`)
    .then(response => {
      this.setState({quote: response.data.quote})
    })
    .catch(error => console.log(error))
  }

  render(){
    return(

      <Container>
      <Jumbotron>
      <h2>Words of wisdom from Ron Swanson</h2>
      <p>Give me a click</p>
      <button className="btn" onClick={(e) => this.handleClick(e)}><img alt="ron" className="ron-image" src="img/logo.png"/></button>
      <hr/>
      <h5>{this.state.quote}</h5>
      </Jumbotron>
      </Container>
    )
  }
}

export default Home;
