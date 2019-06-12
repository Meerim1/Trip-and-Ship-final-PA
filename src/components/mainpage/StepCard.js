import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";
import { defaultProps } from "recompose";
import color from "@material-ui/core/colors/lightGreen";

function StepCard(props) {
  const { icon, number, header } = props;
  return (
    <StepCardWrapper>
      <div>{icon}</div>
      <StepCardHeader>{number}</StepCardHeader>
      <StepCardBody>
        <span>{header}</span>
      </StepCardBody>
    </StepCardWrapper>
  );
}

const StepCardWrapper = styled.div`
margin-top:3.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 30%;
  svg {
    height: 120px;
    width: 120px;
  }
`;

const StepCardHeader = styled.div`
  color: ${colors.shadow1};
  font-size: 30px;
`;
const StepCardBody = styled.div`
display: flex;
justify-content:center;
  width: 75%;
  span {
    font-size: 20px;
  }
`;

export default StepCard;
