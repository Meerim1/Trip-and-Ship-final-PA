import React, { Component } from "react";
import styled from "styled-components";
import { Card, CardFooter, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";
import { LocationIcon, UserAvatar, SButton, SLink } from "../../components";

class TripCard extends Component {
  render() {
    return (
      <SCard xs="6">
      <SLink to="/oneTrip">
        <SCardHeader>
          <SFlexDiv column>
            <SFlexDiv>
              <LocationIcon />
              Откуда:
              <p> Бишкек, Кыргызстан</p>
            </SFlexDiv>
            <SFlexDiv>
              <LocationIcon />
              Куда:
              <p> Москва, Россия</p>
            </SFlexDiv>
          </SFlexDiv>
          <SFlexDiv column>
            <p style={{ fontSize: "15px" }}>28/06/2019</p>
          </SFlexDiv>
        </SCardHeader>
        <SCardBody >
          <SFlexDiv between>
            <SFlexDiv>
              <UserAvatar />
              <h5>Николай</h5>
            </SFlexDiv>
            <SButton>Попросить доставить</SButton>
          </SFlexDiv>
        </SCardBody>
        </SLink>
      </SCard>
    );
  }
}

const SCard = styled(Card)`
  width: 48%;
  padding: 1em 2em;
  box-shadow: 0px 0px 3px 0.5px #ced5e2;
  margin-bottom: 2.5em;
`;

const SCardHeader = styled(CardHeader)`
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  padding-right: 0;
`;
const SCardBody = styled(CardBody)`
  padding-left: 0;
  padding-right: 0;
`;
const SFlexDiv = styled.div`
  display: flex;
  justify-content: ${props => (props.between ? "space-between" : "flex-start")};
  flex-direction: ${props => (props.column ? "column" : "row")};
  svg {
    width: 25px;
    height: 30px;
    margin-right: 5px;
  }
`;

export default TripCard;
