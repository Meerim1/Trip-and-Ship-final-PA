import React, { Component, Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { colors } from "../../config/var";

import {
  BoxIcon,
  LocationIcon,
  StarIcon,
  SButton,
  RequestCard
} from "../../components";

class TopRequests extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <STopRequests>
          <RequestCard />
          <RequestCard />
          <RequestCard />
        </STopRequests>
      </ThemeProvider>
    );
  }
}

const theme = {
  font: "Rubik"
};

const STopRequests = styled.div`
  align-items: center;
  justify-content: space-around;
  padding-top: 1.5em;
  display: flex;
  margin-right: 10px;
  font-family: ${props => props.theme.font};
  a {
    text-decoration: none;
    color: ${colors.dark_grey};
  }
`;

export default TopRequests;
