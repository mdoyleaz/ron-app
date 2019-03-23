import React, {Component} from "react";
import {Route, HashRouter} from "react-router-dom";

// Local Component Imports
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home";
import Quotes from "./components/pages/Quotes";
import TopQuotes from "./components/pages/TopQuotes";

class Main extends Component {
  render() {
    return (<HashRouter>
      <div>
        <Navbar/>
        <div className="content-container container">
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/quotes" component={Quotes}/>
          <Route path="/topquotes" component={TopQuotes}/>
        </div>
      </div>
    </HashRouter>);
  }
}

export default Main;
