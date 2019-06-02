import React, { Component } from "react";
import styled from "styled-components";
import colors from "../../config/var";
import { Col } from "reactstrap";
import SButtonBigger from "../elements/SButton";
import { ReverseIcon, SInput } from "../../components";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const style = theme => ({
  input: {
    marginRight: theme.spacing.unit,
    width: "100%",
    marginTop: "0",
    marginBottom: "0",
    focus: {
      border: "1.5px solid red"
    }
  },
  button: {
    padding: "16px 30px"
  }
});

class SearchBox extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Col xs="9" style={{ padding: "30px 0px" }}>
        <SForm row medium>
          <TextField
            className={classes.input}
            id="outlined-search"
            label="Откуда"
            type="search"
            margin="normal"
            variant="outlined"
          />
          <div>
            <ReverseIcon />
          </div>
          <TextField
            className={classes.input}
            id="outlined-search"
            label="Куда"
            type="search"
            margin="normal"
            variant="outlined"
          />
          <TextField
            className={classes.input}
            id="date"
            label="Дата"
            type="date"
            defaultValue="2017-05-24"
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

        {/* <SForm>
          <SInput placeholder="Откуда" />
          <div>
            <ReverseIcon />
          </div>
          <SInput placeholder="Куда" />
          <SInput type="date" placeholder="До какого числа доставить" />
          <SButtonBigger>Найти поездки</SButtonBigger>
        </SForm> */}
      </Col>
    );
  }
}

const SForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 40px;
    height: 30px;
  }
`;

export default withStyles(style)(SearchBox);
