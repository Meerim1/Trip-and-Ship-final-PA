import React, { Component } from "react";
import { Container } from "reactstrap";
import {
  SectionBlock,
  Title,
  TitleCenter,
  TopRequests,
  TopTrips,
  SForm,
  BackgroundWrapper,
  WhiteBackground,
  StepsBlock,
  Layout,
  SimpleSlider,
  CountrySelect,
  RequestCard,
  TripCard
} from "../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import PT from "prop-types";
import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BImage from "../static/images/bg3.jpeg";
import FeedBackImg from "../static/images/feedback.jpg";
import { colors } from "../config/var";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MainPage extends Component {
  render() {
    const {
      requests_objects,
      status1,
      trips_objects,
      status2,
      classes
    } = this.props;
    const new_requests = requests_objects.filter(object => object.index < 3);
    return (
      <Layout>
        <BackgroundImage>
          <div style={{ position: "relative" }}>
            <Container>
              <SectionBlock>
                <Title />
                {/* <CountrySelect /> */}
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
                <RequestWrapper>
                  <RequestCard {...requests_objects[0]} />
                  <RequestCard {...requests_objects[1]} />
                  <RequestCard {...requests_objects[2]} />
                </RequestWrapper>
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
                  <TripCard {...trips_objects[0]} />
                  <TripCard {...trips_objects[1]} />
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
            <WhiteBackground paddingTop paddingBottom full>
              <TitleCenter>Как отправить посылку с Trip and Ship</TitleCenter>
              <StepsBlock />
            </WhiteBackground>
            <SectionBlock>
              <TitleCenter>Отзывы пользователей</TitleCenter>
              <SliderBlock>
                <SFeedBack src={FeedBackImg} />
                <SimpleSlider />
              </SliderBlock>
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

const SliderBlock = styled.div`
  margin-top: 2.5em;
  display: flex;
  justify-content: space-between;
`;

const SFeedBack = styled.img`
  width: 470px;
  height: 350px;
  box-shadow: 0px 0px 3px 0.5px #ced5e2;
  border-radius: 3px;
`;
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
  width:100%;
`;

const TripWrapper = styled.div`
  padding-top: 4em;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width:100%;
`;

MainPage.propTypes = {
  classes: PT.object.isRequired,
  requests_objects: PT.array.isRequired,
  status: PT.string
};

export default connect(
  // mapStateToProps
  state => ({
    requests_objects: state.requests.objects,
    status1: state.requests.status,
    trips_objects: state.trips.objects,
    status2: state.trips.status
  })
)(withStyles(styles)(MainPage));
