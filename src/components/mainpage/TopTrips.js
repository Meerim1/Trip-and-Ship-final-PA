import React, { Component } from "react";
import styled from "styled-components";
import { Card, CardFooter, CardBody, CardHeader } from "reactstrap";
import { LocationIcon, UserAvatar, Button } from "../../components";

class TopTrips extends Component {
  render() {
    return (
      <STopTrips>
        <Card
          xs="6"
          style={{
            width: "48%",
            padding: "1em 2em",
            boxShadow: "0px 0px 3px 0.5px #ced5e2"
          }}
        >
          <CardHeader
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "0",
              paddingRight: "0"
            }}
          >
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
          </CardHeader>
          <CardBody style={{ paddingLeft: "0", paddingRight: "0" }}>
            <SFlexDiv between>
              <SFlexDiv>
                <UserAvatar />
                <h5>Николай Костер-Вальдау</h5>
              </SFlexDiv>
              <Button>Попросить доставить</Button>
            </SFlexDiv>
          </CardBody>
        </Card>
        <Card
          xs="6"
          style={{
            width: "48%",
            padding: "1em 2em",
            boxShadow: "0px 0px 3px 0.5px #ced5e2"
          }}
        >
          <CardHeader
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "0",
              paddingRight: "0"
            }}
          >
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
          </CardHeader>
          <CardBody style={{ paddingLeft: "0", paddingRight: "0" }}>
            <SFlexDiv between>
              <SFlexDiv>
                <UserAvatar />
                <h5>Нурлан Сабуров</h5>
              </SFlexDiv>
              <Button>Попросить доставить</Button>
            </SFlexDiv>
          </CardBody>
        </Card>
      </STopTrips>
    );
  }
}

const STopTrips = styled.div`
  padding-top: 1.5em;
  display: flex;
  justify-content: space-around;
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

export default TopTrips;
