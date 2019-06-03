import React, { Component } from "react";
import {
  Layout,
  TitleCenter,
  STitle,
  SForm,
  RequestCard,
  SectionBlock,
  SInput,
  SButtonBigger,
  BackgroundWrapper
} from "../components";
import { Container } from "reactstrap";
import styled from "styled-components";
import { colors } from "../config/var";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import BImage from "../static/images/package-reverse.jpeg";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    marginRight: theme.spacing.unit,
    width: "100%",
    marginTop: "0",
    marginBottom: "0",
    backgroundColor: "white"
  },
  button: {
    padding: "16px 30px"
  }
});

class Requests extends Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <BackgroundImage>
          <div style={{ position: "relative" }}>
            <Container>
              <SectionBlock>
                <STitle>Найти заявку</STitle>
                <SForm row medium>
                  <TextField
                    className={classes.input}
                    id="outlined-search"
                    label="Откуда"
                    type="search"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    className={classes.input}
                    id="outlined-search"
                    label="Куда"
                    type="search"
                    margin="normal"
                    variant="outlined"
                  />
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                  >
                    Искать
                  </Button>
                </SForm>
              </SectionBlock>
            </Container>
          </div>
        </BackgroundImage>
        <BackgroundWrapper>
          <Container>
            <SectionBlock>
              <TitleCenter>Все заявки</TitleCenter>
              <RequestWrapper>
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
              </RequestWrapper>
            </SectionBlock>
          </Container>
        </BackgroundWrapper>
      </Layout>
    );
  }
};

const BackgroundImage = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${BImage});
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: grayscale(50%);
  }
  /* color: white; */
`;

const RequestWrapper = styled.div`
  align-items: center;
  justify-content: space-around;
  padding-top: 1.5em;
  display: flex;
  flex-wrap: wrap;
  margin-right: 10px;

  font-family: ${props => props.theme.font};
  a {
    text-decoration: none;
    color: ${colors.dark_grey};
  }
`;

Requests.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Requests);
