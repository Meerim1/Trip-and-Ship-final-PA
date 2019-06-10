import { MuiThemeProvider } from "@material-ui/core/styles";
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  AboutPage,
  LoginPage,
  MainPage,
  NewRequestPage,
  NewTripPage,
  RegistrationPage,
  Requests,
  Trips,
  ProfilePage,
  OneTripPage,
  OneRequestPage,
  AccountPage,
  QAPage,
  SenderTipsPage,
  TravelerTipsPage,
  SettingPage
} from "./pages";
import { theme } from "./config/var";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <Route exact path="/" component={MainPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/newRequest" component={NewRequestPage} /> //вопрос
            <Route path="/newTrip" component={NewTripPage} />
            <Route path="/requests" component={Requests} />
            <Route path="/trips" component={Trips} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/oneRequest" component={OneRequestPage} />
            <Route path="/oneTrip" component={OneTripPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/questionAnswer" component={QAPage} />
            <Route path="/tips1" component={SenderTipsPage} />
            <Route path="/tips2" component={TravelerTipsPage} />
            <Route path="/settings" component={SettingPage} />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
