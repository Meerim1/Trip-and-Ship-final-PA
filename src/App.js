import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainPage } from "./pages";
import "./App.scss"
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={MainPage} />
          {/* <Route path="/about" component={AboutPage} />
          <Route path="/search/:author_slug?" component={SeachPage} /> */}
        </Fragment>
      </Router>
    );
  }
}

export default App;