import React, { Component } from "react";
import { Container } from "reactstrap";
import {
  SectionBlock,
  Layout,
  STitle,
  SForm,
  BackgroundWrapper,
  WhiteBackground,
} from "../components";
import styled from "styled-components";
import {
  Button,
  TextField,
  InputLabel,
  FormControl,
  OutlinedInput,
  withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";
import PasswordImg from "../static/icons/password1.png";
import UserImg from "../static/icons/user1.png";
import DateImg from "../static/icons/date.png";
import PenImg from "../static/icons/pen.png";
import MailImg from "../static/icons/email1.png";

class LoginPage extends Component {
  constructor(){
    super();
    this.state = ({
      email: "",
      password: ""
    })
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    
  }

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
              <SForm medium>
                <FlexWrapper start>
                  <img src={MailImg} width="40px" height="40px" />
                  <TextField
                    className={classes.input}
                    id="outlined-search"
                    label="Почта"
                    type="search"
                    margin="normal"
                    variant="outlined"
                  />
                </FlexWrapper>
                <FlexWrapper start>
                  <img src={PasswordImg} width="40px" height="40px" />
                  <TextField
                    id="outlined-search"
                    className={classes.input}
                    label="Пароль"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    onChange={this.onChange}
                  />
                </FlexWrapper>

                <Button variant="contained" color="primary">
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

export default withStyles(styles)(LoginPage);
