import React, { Component } from "react";
import { Container } from "reactstrap";
import {
  Layout,
  STitle,
  SForm,
  BackgroundWrapper,
  WhiteBackground
} from "../components";
import styled from "styled-components";
import { Button, TextField, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import PasswordImg from "../static/icons/password1.png";
import MailImg from "../static/icons/email1.png";
import { startLogin } from "../actions/LoginUserAction";
import PT from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { LOGIN_URL } from "../config/urls"

class LoginPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // axios
    //   .get(LOGIN_URL, {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Authorization": "Basic eUBtYWlsLnJ1OjEyMw==",
    //       "Content-Type": "application/json;charset=UTF-8"
    //     },
    //     withCredentials: true
    //   })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    const user = {
      login: this.state.email,
      password: this.state.password
    };

    this.props.startLogin(user).then(res => {
      if (res) {
        this.props.history.push("/");
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <BackgroundWrapper paddingTop paddingBottom>
          <Container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <WhiteBackground main>
              <STitle>Войти</STitle>
              <SForm medium onSubmit={this.handleSubmit}>
                <FlexWrapper start>
                  <img src={MailImg} width="40px" height="40px" />
                  <TextField
                    name="email"
                    onChange={this.handleChange}
                    className={classes.input}
                    label="Почта"
                    type="email"
                    margin="normal"
                    variant="outlined"
                  />
                </FlexWrapper>
                <FlexWrapper start>
                  <img src={PasswordImg} width="40px" height="40px" />
                  <TextField
                    name="password"
                    onChange={this.handleChange}
                    className={classes.input}
                    label="Пароль"
                    type="password"
                    margin="normal"
                    variant="outlined"
                  />
                </FlexWrapper>

                <Button type="submit" variant="contained" color="primary">
                  Добавить
                </Button>
              </SForm>
            </WhiteBackground>
            <WhiteBackground>
              <h6>Уже есть аккаунт?</h6>
              <Button>Войти</Button>
            </WhiteBackground>
          </Container>
        </BackgroundWrapper>
      </Layout>
    );
  }
}

const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => (props.start ? "start" : "space-between")};
  flex-direction: ${props => (props.column ? "column" : "row")};
  margin-bottom: 1em;
  align-items: center;
  img {
    margin-right: 0.5em;
  }
`;

LoginPage.propTypes = {
  classes: PropTypes.object
};

const styles = theme => ({
  input: {
    marginRight: "1.5em",
    width: "100%",
    marginTop: "0",
    marginBottom: "0"
  },
  dateInput: {
    width: "86%"
  },
  selectInput: {
    width: "83.5%"
  },
  descriptionInput: {
    width: "60%"
  },
  button: {
    padding: "16px 30px"
  }
});

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  _user: PT.array,
  status: PT.string,
  startLogin: PT.func.isRequired
};

export default withRouter(
  connect(
    state => ({
      _user: state.user.object,
      status: state.user.status
    }),

    {
      startLogin: startLogin
    }
  )(withStyles(styles)(LoginPage))
);
