import "../css/Navbar.css";

import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (<Navbar expand="lg" variant="dark">

      <Navbar.Brand href="/">
        <img className="img-fluid" src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Ron Quotes"/>
      </Navbar.Brand>

      <Navbar.Toggle className="navbar-toggler-left" aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#quotes">Quotes</Nav.Link>
          <Nav.Link href="#topquotes">Top Rated</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>)
  };
};
export default NavigationBar;
