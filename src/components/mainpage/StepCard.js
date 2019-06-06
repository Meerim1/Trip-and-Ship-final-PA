import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";

function StepCard(props) {
  return (
    <StepCardWrapper>
      <StepCardHeader>
        <span>1</span>
      </StepCardHeader>
      <StepCardBody>
        <h4>Зарегистрируйтесь</h4>
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
