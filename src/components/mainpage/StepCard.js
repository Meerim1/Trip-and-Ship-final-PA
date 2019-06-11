import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";
import { defaultProps } from "recompose";
import { CallIcon } from "../../components"
import TruckIcon from "../icons/TruckIcon";

function StepCard(props) {
  const { number, header } = props;
  return (
    <StepCardWrapper>
      <TruckIcon />
      <StepCardHeader>
        <span>{number}</span>
      </StepCardHeader>
      <StepCardBody>
        <h4>{header}</h4>
      </StepCardBody>
    </StepCardWrapper>
  );
}

const StepCardWrapper = styled.div`
svg{
  height: 100px;
  width: 100px;
}
`;

const StepCardHeader = styled.div`
  span {
    color: ${colors.shadow1};
    font-size: 25px;
  }
`;
const StepCardBody = styled.div``;

export default StepCard;
