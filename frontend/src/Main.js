import React, {Component} from "react";
import {Route, HashRouter, Switch} from "react-router-dom";

// Local Component Imports
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Quotes from "./components/pages/Quotes";
import TopQuotes from "./components/pages/TopQuotes";


class Main extends Component {
  state = {
    ratedQuotes: []
  };

  render() {
    return (
      <HashRouter>
      <div>
          <Navbar />
        <div className="content-container container">
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/quotes" component={Quotes}/>
          <Route path="/topquotes" component={TopQuotes}/>
        </Switch>
        </div>
      </div>
    </HashRouter>
  );
  }
}

export default Main;
