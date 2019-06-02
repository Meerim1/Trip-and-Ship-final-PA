import React, { Component } from "react";
import { Layout, SectionBlock, STitle, SForm } from "../components";
import { Container } from "reactstrap";
import styled from "styled-components";
import PropTypes from "prop-types";
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

const styles = theme => ({
  input: {
    marginRight: "1em",
    width: "100%",
    marginTop: "0",
    marginBottom: "0"
  },
  moneyInput: {
    marginRight: "0.4em",
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
    width: "150px"
  },
  button: {
    padding: "16px 30px"
  }
});

class NewRequestPage extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      weight: "",
      startPoint: "",
      endPoint: "",
      date: "",
      description: "",
      img: "",
      payment: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getCharacters() {
    this.props.startCharactersQ(this.state.q);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      weight: event.target.value,
      startPoint: event.target.value,
      endPoint: event.target.value,
      date: event.target.value,
      description: event.target.value,
      img: event.target.value,
      payment: event.target.value
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <Container>
          <SectionBlock>
            <STitle>Новая заявка</STitle>
            <SForm medium>
              <FlexWrapper>
                <FlexWrapper start>
                  <img src={BoxImg} width="40px" height="40px" />
                  <TextField
                    focused
                    className={classes.input}
                    id="outlined-search"
                    label="Вы хотите отправить"
                    type="search"
                    margin="normal"
                    variant="outlined"
                    onChange={this.onChange}
                  />
                </FlexWrapper>
                <FlexWrapper start>
                  <img src={WeightImg} width="40px" height="40px" />
                  <FormControl className="selectInput" variant="outlined">
                    <InputLabel htmlFor="label-weight">Вес</InputLabel>
                    <Select
                      input={<OutlinedInput name="weight" id="label-weight" />}
                    >
                      <option value="" />
                      <option>менее 500гр</option>
                      <option>менее 1кг</option>
                      <option>менее 5кг</option>
                      <option>более 5кг</option>
                    </Select>
                  </FormControl>
                </FlexWrapper>
              </FlexWrapper>
              <FlexWrapper>
                <FlexWrapper start>
                  <img src={StartImg} width="40px" height="40px" />
                  <TextField
                    className={classes.input}
                    id="outlined-search"
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
                    id="date"
                    label="Дата"
                    type="date"
                    defaultValue="2017-05-24"
                    margin="normal"
                    variant="outlined"
                  />
                </FlexWrapper>
                <FlexWrapper start>
                  <img src={MoneyImg} width="40px" height="40px" />
                  <TextField
                    className={classes.moneyInput}
                    label="Сколько вы готовы заплатить"
                    type="search"
                    margin="normal"
                    variant="outlined"
                  />
                  <h6>сом</h6>
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
              <FlexWrapper start>
                <img src={PhotoImg} width="40px" height="40px" />
                <TextField
                  id="outlined-file"
                  // className={classes.descriptionInput}
                  label="Выберите файл"
                  type="file"
                  margin="normal"
                  variant="outlined"
                  onChange={this.onChange}
                />
              </FlexWrapper>
              <Button variant="contained" color="primary">
                Создать
              </Button>
            </SForm>
          </SectionBlock>
        </Container>
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
  h6 {
    background-color: #d0d0f5;
    padding: 17px 15px;
    margin: 0;
    border-radius: 3px;
  }
`;

NewRequestPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewRequestPage);
