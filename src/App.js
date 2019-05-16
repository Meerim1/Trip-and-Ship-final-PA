import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainPage, AboutPage } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={AboutPage} />
          
        </Fragment>
      </Router>
    );
  }
}

export default App;