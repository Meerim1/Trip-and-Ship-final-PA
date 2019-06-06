import React, { Component } from "react";
import { Container } from "reactstrap";
import {
  SectionBlock,
  Layout,
  SInput,
  STitle,
  SForm,
  SLabel,
  InputWithLabel,
  BackgroundWrapper,
  WhiteBackground
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
import StartImg from "../static/icons/start.png";
import EndImg from "../static/icons/end.png";
import DateImg from "../static/icons/date.png";
import TransportImg from "../static/icons/transport.png";
import CommentImg from "../static/icons/comment.png";

class RegistrationPage extends Component {
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
              <SForm full>
                <FlexWrapper>
                  <FlexWrapper start>
                    <img src={StartImg} width="40px" height="40px" />
                    <TextField
                      className={classes.input}
                      id="outlined-search"
                      label="Имя Фамилия"
                      type="search"
                      margin="normal"
                      variant="outlined"
                    />
                  </FlexWrapper>
                  <FlexWrapper start>
                    <img src={EndImg} width="40px" height="40px" />
                    <TextField
                      className={classes.input}
                      label="Логин"
                      type="search"
                      margin="normal"
                      variant="outlined"
                    />
                  </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper>
                  <FlexWrapper start>
                    <img src={DateImg} width="40px" height="40px" />
                    <TextField
                      className={classes.input}
                      id="date"
                      label="Дата рождения"
                      type="date"
                      defaultValue="2017-05-24"
                      margin="normal"
                      variant="outlined"
                    />
                  </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper start>
                  <img src={CommentImg} width="40px" height="40px" />
                  <TextField
                    id="filled-multiline-static"
                    multiline
                    rowsMax="4"
                    className={classes.descriptionInput}
                    label="Комментарий"
                    type="search"
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


export default withStyles(styles)(RegistrationPage);
