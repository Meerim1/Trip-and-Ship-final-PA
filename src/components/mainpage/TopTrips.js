import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "reactstrap";

class TopTrips extends Component {
  render() {
    return (
      <STopTrips>
        <Card xs="3">Top Trip 1</Card>
        <Card xs="3">Top Trip 2</Card>
        <Card xs="3">Top Trip 3</Card>
        <Card xs="3">Top Trip 4</Card>
      </STopTrips>
    );
  }
}

const STopTrips = styled.div`
  padding-top: 1.5em;
  display: flex;
  justify-content: center;
  div {
    padding: 1em 2em;
  }
`;

export default TopTrips;
