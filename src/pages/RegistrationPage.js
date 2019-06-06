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
import UserImg from "../static/icons/user1.png";
import DateImg from "../static/icons/date.png";
import MailImg from "../static/icons/email1.png";
import axios from "../config/utils";
import moment from "moment";

class RegistrationPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      fio: "",
      email: "",
      password: "",
      dateOfBirth: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      fio: this.state.fio,
      email: this.state.email,
      password: this.state.password,
      dateOfBirth: moment(this.state.dateOfBirth).format("DD/MM/YYYY")
    };

    axios
      .post(
        "https://touristandtrip.herokuapp.com/api/registration",
        user
      )

      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.error(user);
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
              <STitle>Регистрация</STitle>
              <SForm onSubmit={this.handleSubmit} medium>
                <FlexWrapper start>
                  <img src={UserImg} width="40px" height="40px" />
                  <TextField
                    onChange={this.handleChange}
                    className={classes.input}
                    name="fio"
                    label="Имя Фамилия"
                    type="text"
                    margin="normal"
                    variant="outlined"
                  />
                </FlexWrapper>
                <FlexWrapper start>
                  <img src={MailImg} width="40px" height="40px" />
                  <TextField
                    name="email"
                    className={classes.input}
                    onChange={this.handleChange}
                    label="Почта"
                    type="text"
                    margin="normal"
                    variant="outlined"
                  />
                </FlexWrapper>
                <FlexWrapper start>
                  <img src={DateImg} width="40px" height="40px" />
                  <TextField
                    name="dateOfBirth"
                    className={classes.input}
                    onChange={this.handleChange}
                    label="Дата рождения"
                    type="date"
                    defaultValue="2017-05-24"
                    margin="normal"
                    variant="outlined"
                  />
                </FlexWrapper>
                <FlexWrapper start>
                  <img src={PasswordImg} width="40px" height="40px" />
                  <TextField
                    name="password"
                    className={classes.input}
                    onChange={this.handleChange}
                    label="Пароль"
                    type="password"
                    margin="normal"
                    variant="outlined"
                  />
                </FlexWrapper>

                <Button type="submit" variant="contained" color="primary">
                  Зарегистрироваться
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

RegistrationPage.propTypes = {
  classes: PropTypes.object
};

const styles = theme => ({
  input: {
    marginRight: "1.5em",
    width: "100%",
    marginTop: "0",
    marginBottom: "0"
  },
  button: {
    padding: "16px 30px"
  }
});

export default withStyles(styles)(RegistrationPage);
