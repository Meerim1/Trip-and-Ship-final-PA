import React, { Component } from "react";
import {
  Layout,
  SectionBlock,
  STitle,
  SForm,
  BackgroundWrapper,
  WhiteBackground
} from "../components";
import { Container } from "reactstrap";
import styled from "styled-components";
import PropTypes from "prop-types";
import InputFiles from "react-input-files";
import {
  Button,
  TextField,
  InputLabel,
  Select,
  FormControl,
  OutlinedInput,
  withStyles
} from "@material-ui/core";
import StartImg from "../static/icons/start.png";
import EndImg from "../static/icons/end.png";
import DateImg from "../static/icons/date.png";
import CommentImg from "../static/icons/comment.png";
import BoxImg from "../static/icons/box.png";
import PhotoImg from "../static/icons/photo.png";
import WeightImg from "../static/icons/weight.png";
import MoneyImg from "../static/icons/money.png";
import moment from "moment";
import axios from "axios";
import { connect } from "react-redux";

const styles = theme => ({
  input: {
    marginRight: "1.5em",
    width: "100%",
    marginTop: "0",
    marginBottom: "0"
  },
  moneyInput: {
    marginRight: "0.7em",
    width: "68%",
    marginTop: "0",
    marginBottom: "0"
  },
  descriptionInput: {
    width: "60%"
  },
  dateInput: {
    width: "86%"
  },
  selectInput: {
    width: "100%"
  },
  button: {
    padding: "16px 30px"
  }
});

class NewRequestPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      startPoint: "",
      endPoint: "",
      date: "",
      name: "",
      description: "",
      weight: "",
      price: "",
      volume: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const request = {
      startPoint: this.state.startPoint,
      endPoint: this.state.endPoint,
      item: {
        name: this.state.name,
        description: this.state.description,
        weight: this.state.weight,
        price: this.state.price,
        volume: "200"
      },
      transport: this.state.transport,
      date: moment(this.state.dateOfBirth).format("DD/MM/YYYY")
    };

    // this.props.user.auth_key
    const configHeaders = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Authorization: this.props.user.auth_key
      }
    };
    return axios
      .post("http://localhost:3000/orders/create", request, configHeaders)
      .then(res => {
        console.log(res);
        console.log(res.data);
        return true;
      })
      .catch(error => {
        console.error(request);
      });
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
              <STitle>Новая заявка</STitle>
              <SForm onSubmit={this.handleSubmit} full>
                <FlexWrapper>
                  <FlexWrapper start>
                    <img src={BoxImg} />
                    <TextField
                      focused
                      className={classes.input}
                      name="name"
                      label="Вы хотите отправить"
                      type="search"
                      margin="normal"
                      variant="outlined"
                      onChange={this.handleChange}
                    />
                  </FlexWrapper>
                  <FlexWrapper start>
                    <img src={WeightImg} width="40px" height="40px" />
                    <FormControl className="selectInput" variant="outlined">
                      <InputLabel htmlFor="label-weight">Вес</InputLabel>
                      <Select
                        name="weight"
                        onChange={this.handleChange}
                        input={
                          <OutlinedInput
                            className="selectInput"
                          />
                        }
                      >
                        <option value="" />
                        <option  value="200">200</option>
                        <option value="300">300</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                      </Select>
                    </FormControl>
                  </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper>
                  <FlexWrapper start>
                    <img src={StartImg} />
                    <TextField
                      className={classes.input}
                      name="startPoint"
                      label="Откуда"
                      type="text"
                      margin="normal"
                      variant="outlined"
                      onChange={this.handleChange}
                    />
                  </FlexWrapper>
                  <FlexWrapper start>
                    <img src={EndImg} />
                    <TextField
                      className={classes.input}
                      name="endPoint"
                      label="Куда"
                      type="text"
                      margin="normal"
                      variant="outlined"
                      onChange={this.handleChange}
                    />
                  </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper>
                  <FlexWrapper start>
                    <img src={DateImg} />
                    <TextField
                      className={classes.input}
                      id="date"
                      label="Дата"
                      type="date"
                      defaultValue="2017-05-24"
                      margin="normal"
                      variant="outlined"
                      onChange={this.handleChange}
                    />
                  </FlexWrapper>
                  <FlexWrapper start>
                    <img src={MoneyImg} />
                    <TextField
                      name="price"
                      className={classes.moneyInput}
                      label="Сколько готовы заплатить"
                      type="text"
                      margin="normal"
                      variant="outlined"
                      onChange={this.handleChange}
                    />
                    <h6>сом</h6>
                  </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper start>
                  <img src={CommentImg} />
                  <TextField
                    name="description"
                    multiline
                    rowsMax="4"
                    className={classes.descriptionInput}
                    label="Комментарий"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                  />
                </FlexWrapper>

                <Button type="submit" variant="contained" color="primary">
                  Создать
                </Button>
              </SForm>
            </WhiteBackground>
            <WhiteBackground>
              <FlexWrapper>
                <p>Искать путешественников</p>
              </FlexWrapper>
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
    width: 40px;
    height: 40px;
  }
  h6 {
    background-color: #d0d0f5;
    padding: 17px 15px;
    margin: 0;
    border-radius: 3px;
  }
`;

NewRequestPage.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default connect(state => ({
  user: state.user.object
}))(withStyles(styles)(NewRequestPage));
