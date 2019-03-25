import "../css/Navbar.css";

import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

const NavigationBar = () => {
    return (<Navbar expand="lg" variant="dark">

      <Navbar.Brand href="/">
        <img className="img-fluid" src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Ron Quotes"/>
      </Navbar.Brand>

      <Navbar.Toggle className="navbar-toggler-left" aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Random Quotes</Nav.Link>
          <Nav.Link href="#topquotes">Top Rated</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>)
  };

export default NavigationBar;
