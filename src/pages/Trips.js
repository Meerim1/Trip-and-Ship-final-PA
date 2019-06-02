import React, { Component } from "react";
import {
  Layout,
  TitleCenter,
  STitle,
  SForm,
  TripCard,
  SectionBlock,
  SInput,
  SButtonBigger
} from "../components";
import { Container } from "reactstrap";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const styles = theme => ({
  input: {
    marginRight: theme.spacing.unit,
    width: "100%",
    marginTop: "0",
    marginBottom: "0"
    // '&$focused': {
    //   border: `1.5px ${theme.palette.secondary.main} solid`,
    // }
  },
  button: {
    padding: "16px 30px"
  }
});

class Trips extends Component {
  state = {
    startPoint: "",
    endPoint: ""
  };

  handleChange = name => event => {
    this.setState({
      ...this.state,
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <Container>
          <SectionBlock>
            <STitle>Найти путешественника</STitle>
            <SForm row medium>
              <TextField
                className={classes.input}
                // value={this.state.startPoint}
                id="outlined-search"
                label="Откуда"
                type="search"
                margin="normal"
                variant="outlined"
              />
              <TextField
                className={classes.input}
                // value={this.state.endPoint}
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
              {/* <SButtonBigger yellow>Искать</SButtonBigger> */}
            </SForm>
            <TitleCenter>Все путешествия</TitleCenter>
            <TripWrapper>
              <TripCard />
              <TripCard />
              <TripCard />
              <TripCard />
              <TripCard />
              <TripCard />
            </TripWrapper>
          </SectionBlock>
        </Container>
      </Layout>
    );
  }
}

const TripWrapper = styled.div`
  padding-top: 1.5em;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

Trips.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Trips);
