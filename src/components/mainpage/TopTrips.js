import React, { Component } from "react";
import styled from "styled-components";
import {  TripCard  } from "../../components";

class TopTrips extends Component {
  render() {
    return (
      <STopTrips>
        <TripCard />
        <TripCard />
      </STopTrips>
    );
  }
}

const STopTrips = styled.div`
  padding-top: 1.5em;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export default TopTrips;
