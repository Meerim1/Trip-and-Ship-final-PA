import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";
import { defaultProps } from "recompose";

function StepCard(props) {
  const {number, header} = props;
  return (
    <StepCardWrapper >
      <StepCardHeader>
        <span>{number}</span>
      </StepCardHeader>
      <StepCardBody>
        <h4>{header}</h4>
      </StepCardBody>
    </StepCardWrapper>
  );
}

const StepCardWrapper = styled.div``;

const StepCardHeader = styled.div`
  span {
    color: ${colors.shadow1};
    font-size: 25px;
  }
`;
const StepCardBody = styled.div``;

export default StepCard;
