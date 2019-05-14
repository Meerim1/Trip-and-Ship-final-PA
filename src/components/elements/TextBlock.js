import React, { Component } from "react";
import styled from "styled-components";

class TextBlock extends Component {
  render() {
    return <STextBlock>{this.props.children}</STextBlock>;
  }
}

const STextBlock = styled.p`
  padding-top: 2em;
  width: 30%;
`;

export default TextBlock;
