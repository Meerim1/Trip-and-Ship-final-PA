import React, { Component } from "react";
import styled from "styled-components";

class TitleCenter extends Component {
  render() {
    return <STitleCenter>{this.props.children}</STitleCenter>;
  }
}

const STitleCenter = styled.h2`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  display:inline-block;
  margin: 0 auto;
`;

export default TitleCenter;
