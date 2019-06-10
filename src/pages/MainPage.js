import React, { Component } from "react";
import { Container } from "reactstrap";
import { Layout, SimpleSlider } from "../components";
import {
  SectionBlock,
  Title,
  TitleCenter,
  TopRequests,
  TopTrips,
  SForm,
  BackgroundWrapper,
  WhiteBackground,
  StepsBlock
} from "../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import PT from "prop-types";
import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BImage from "../static/images/bg3.jpeg";
import { colors } from "../config/var";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <BackgroundImage>
          <div style={{ position: "relative" }}>
            <Container>
              <SectionBlock>
                <Title />
                <SForm row full>
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
              <FlexWrapper>
                <TitleCenter>Новые заявки</TitleCenter>
                <TopRequests />
                <Button variant="contained" color="primary">
                  <Link
                    style={{ color: "inherit", textDecoration: "none" }}
                    to="/requests"
                  >
                    Показать все
                  </Link>
                </Button>
              </FlexWrapper>
            </SectionBlock>
            <SectionBlock>
              <FlexWrapper>
                <TitleCenter>Последние путешествия</TitleCenter>
                <TripWrapper>
                  <TopTrips />
                </TripWrapper>
                <Button variant="contained" color="primary">
                  <Link
                    style={{ color: "inherit", textDecoration: "none" }}
                    to="/trips"
                  >
                    Показать все
                  </Link>
                </Button>
              </FlexWrapper>
            </SectionBlock>
            <WhiteBackground full>
              <TitleCenter>Как отправить посылку с Trip and Ship</TitleCenter>
              <StepsBlock />
            </WhiteBackground>
            <SectionBlock>
              <TitleCenter>Отзывы пользователей</TitleCenter>
              <SimpleSlider />
            </SectionBlock>
          </Container>
        </BackgroundWrapper>
      </Layout>
    );
  }
}

const styles = theme => ({
  input: {
    marginRight: theme.spacing.unit,
    width: "100%",
    marginTop: "0",
    marginBottom: "0",
    backgroundColor: "white",
    borderRadius: "3px"
    // '&$focused': {
    //   border: `1.5px ${theme.palette.secondary.main} solid`,
    // }
  },
  button: {
    padding: "16px 30px"
  }
});

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

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TripWrapper = styled.div`
  padding-top: 2em;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

MainPage.propTypes = {
  classes: PT.object.isRequired
};

export default withStyles(styles)(MainPage);
