import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "reactstrap";

class TopRequests extends Component {
  render() {
    return (
      <STopRequests>
        <Card xs="4">Some Text1</Card>
        <Card xs="4">Some Text2</Card>
        <Card xs="4">Some Text3</Card>
      </STopRequests>
    );
  }
}

const STopRequests = styled.div`
    align-items:center;
    justify-content: center;
  padding-top: 1.5em;
  display: flex;
  div {
    padding: 1em 2em;
  }
`;

export default TopRequests;
