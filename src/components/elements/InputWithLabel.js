import React, { Component } from "react";
import styled from "styled-components";
import SInput from "./SInput";

class InputWithLabel extends Component {
  render() {
    return (
      <SInputWrapper>
        <SInput type="text" right />
        <SLabel>{this.props.children}</SLabel>
      </SInputWrapper>
    );
  }
}

const SInputWrapper = styled.div`
  position: relative;
`;

const SLabel = styled.label`
  position: absolute;
  top: 2px;
  left: 7px;
  font-size: 11px;
  opacity: 0.6;
`;

export { InputWithLabel, SLabel} ;
