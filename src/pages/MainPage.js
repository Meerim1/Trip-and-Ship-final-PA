import React, { Component } from "react";
import { Container } from "reactstrap";
import { Layout, SimpleSlider } from "../components";
import {
  SectionBlock,
  Title,
  SearchBox,
  TitleCenter,
  TopRequests,
  TopTrips,
  TextBlock,
  SForm,
  BackgroundWrapper
} from "../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import PT from "prop-types";
import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BImage from "../static/images/bg3.jpeg";
import { colors } from "../config/var"

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
                <Button>Показать все</Button>
              </FlexWrapper>
            </SectionBlock>
            
            <SectionBlock>
              <FlexWrapper>
                <TitleCenter>Последние путешествия</TitleCenter>
                <TripWrapper>
                  <TopTrips />
                </TripWrapper>

                <Button>Показать все</Button>
              </FlexWrapper>
            </SectionBlock>
          </Container>
        </BackgroundWrapper>
        <Container>
          <SectionBlock>
            <TitleCenter>Отправки через Trip and Ship это</TitleCenter>
          </SectionBlock>
          <SectionBlock>
            <TitleCenter>Отзывы пользователей</TitleCenter>
            <SimpleSlider />
          </SectionBlock>
        </Container>
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
  padding-top: 4em;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

MainPage.propTypes = {
  classes: PT.object.isRequired
};

const SLine = styled.div`
  height: 10px;
  width: 80%;
  color: ${colors.shadow1}
`;

export default withStyles(styles)(MainPage);
