import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainPage, AboutPage, RegisterPage, LoginPage, NewRequestPage, NewTripPage } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/newRequest" component={NewRequestPage} />
          <Route path="/newTrip" component={NewTripPage} />
        </Fragment>
      </Router>
    );
  }
}

export default App;