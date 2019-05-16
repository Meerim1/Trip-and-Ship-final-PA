import React, { Component } from "react";
import styled from "styled-components";

class TitleCenter extends Component {
  render() {
    return (
      <STitleCenter>
        <h3>{this.props.children}</h3>
      </STitleCenter>
    );
  }
}

const STitleCenter = styled.div`
  font-family: "Rubik", sans-serif;
  display: flex;
  width: 100%;
  justify-content:center;
  h3{
    font-weight: 400;
  }
`;

export default TitleCenter;
