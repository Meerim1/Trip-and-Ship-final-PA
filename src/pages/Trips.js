import React, { Component } from "react";
import {
  Layout,
  TitleCenter,
  STitle,
  SForm,
  TripCard,
  SectionBlock,
  BackgroundWrapper
} from "../components";
import { Container } from "reactstrap";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import BImage from "../static/images/bg3.jpeg";
import { startTrips } from "../actions/TripCardsAction";
import { connect } from "react-redux";
import PT from "prop-types";

class Trips extends Component {
  constructor() {
    super();
    this.state = {
      q: ""
    };
    this.getTrips = this.getTrips.bind(this);
  }

  componentDidMount() {
    this.getTrips();
  }

  getTrips() {
    this.props.startTrips(this.state.q);
  }

  render() {
    const { trips_objects, status, classes } = this.props

    return (
      <Layout>
        <BackgroundImage>
          <div style={{ position: "relative" }}>
            <Container>
              <SectionBlock>
                <STitle>Найти путешественника</STitle>
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
              <TitleCenter>Все путешествия</TitleCenter>
              <TripWrapper>
              {
                  trips_objects.map(c => (
                    <TripCard {...c}/>
                  ))
              }
              {
                status === "loading" ?
                  <p>Загрузка...</p>
                  : null
              }
              </TripWrapper>
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

const TripWrapper = styled.div`
  padding-top: 4em;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

Trips.propTypes = {
  classes: PropTypes.object.isRequired,
  trips_objects: PT.array.isRequired,
  status: PT.string,
  startTrips: PT.func.isRequired
};

export default connect(
  // mapStateToProps
  state => ({
    trips_objects: state.trips.objects,
    status: state.trips.status
  }),
  // mapDispatchToProps
  {
    startTrips: startTrips
  }
)(withStyles(styles)(Trips));