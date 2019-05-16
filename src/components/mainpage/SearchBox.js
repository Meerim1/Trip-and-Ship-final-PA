import React, { Component } from "react";
import styled from "styled-components";
import colors from "../../config/var";
import { Col } from "reactstrap";
import Button from "../elements/Button";
import { ReverseIcon } from "../../components";

class SearchBox extends Component {
  render() {
    return (
      <Col xs="9" style={{ padding: "30px 0px" }}>
        <SForm>
          <SInput placeholder="Откуда" />
          <div>
            <ReverseIcon />
          </div>

          <SInput placeholder="Куда" />
          <SInput type="date" placeholder="До какого числа доставить" />
          <SButtonBigger>Найти поездки</SButtonBigger>
        </SForm>
      </Col>
    );
  }
}

const SForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg{
    width: 40px;
    height: 30px;
  }
`;
const SInput = styled.input`
  font-family: "Rubik";
  padding: 10px 10px;
  box-sizing: border-box;
  border-radius: 2px;
  border: solid 1px ${colors.light_grey};
  color: ${colors.grey};
  outline: none;
  &:focus {
    border: solid 1.5px ${colors.yellow};
  }
`;

const SIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const SButtonBigger = styled(Button)`
  padding: 0.5em 2em;
  outline: none;
`;
export default SearchBox;
