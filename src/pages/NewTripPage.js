import React, { Component } from "react";
import {
  Layout,
  STitle,
  SectionBlock,
  SForm,
  BackgroundWrapper,
  WhiteBackground
} from "../components";
import { Container } from "reactstrap";
import styled from "styled-components";
import {
  Button,
  TextField,
  InputLabel,
  Select,
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
import moment from "moment";
import axios from "../config/utils";

class NewTripPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      startPoint: "Karakol",
      endPoint: "Batumi",
      dateOfDisactivate: "12/12/1200",
      description: "aslfksajdvhalsdvhlas",
      transport: "Plane"
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      transport: "Plane"
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    const trip = {
      startPoint: this.state.startPoint,
      endPoint: this.state.endPoint,
      dateOfDisactivate: moment(this.state.dateOfBirth).format("DD/MM/YYYY"),
      description: this.state.description,
      transport: this.state.transport
    };

    axios
      .post("https://touristandtrip.herokuapp.com/trip/create", trip)

      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.error(trip);
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
              <STitle>Добавить свою поездку</STitle>
              <SForm full onSubmit={this.handleSubmit}>
                <FlexWrapper>
                  <FlexWrapper start>
                    <img src={StartImg} width="40px" height="40px" />
                    <TextField
                      className={classes.input}
                      onChange={this.handleChange}
                      name="startPoint"
                      label="Откуда"
                      type="search"
                      margin="normal"
                      variant="outlined"
                    />
                  </FlexWrapper>
                  <FlexWrapper start>
                    <img src={EndImg} width="40px" height="40px" />
                    <TextField
                      className={classes.input}
                      onChange={this.handleChange}
                      name="endPoint"
                      label="Куда"
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
                      onChange={this.handleChange}
                      name="dateOfDisactivate"
                      label="Дата"
                      type="date"
                      defaultValue="2017-05-24"
                      margin="normal"
                      variant="outlined"
                    />
                  </FlexWrapper>
                  <FlexWrapper start>
                    <img src={TransportImg} width="40px" height="40px" />
                    <FormControl
                      className="selectInput"
                      variant="outlined"
                      style={{ width: "82.5%" }}
                    >
                      <InputLabel htmlFor="label-transport">
                        Транспорт
                      </InputLabel>
                      <Select
                        native
                        input={
                          <OutlinedInput
                            onChange={this.handleChange}
                            name="transport"
                            id="label-transport"
                          />
                        }
                      >
                        <option value="" />
                        <option>Машина</option>
                        <option>Самолет</option>
                        <option>Автобус</option>
                        <option>Поезд</option>
                      </Select>
                    </FormControl>
                  </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper start>
                  <img src={CommentImg} width="40px" height="40px" />
                  <TextField
                    name="description"
                    onChange={this.handleChange}
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

                <Button type="submit" variant="contained" color="primary">
                  Добавить
                </Button>
              </SForm>
            </WhiteBackground>
            <WhiteBackground>
              <p>Искать путешественников</p>
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

NewTripPage.propTypes = {
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

export default withStyles(styles)(NewTripPage);
