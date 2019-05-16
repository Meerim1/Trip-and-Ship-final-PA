import React, { Component, Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Card, CardFooter, CardBody, CardHeader } from "reactstrap";
import colors from "../../config/var";
import { BoxIcon, LocationIcon, StarIcon, Button } from "../../components";

class TopRequests extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <STopRequests>
          <Card
            xs="4"
            style={{
              width: "30%",
              padding: "1em 1em",
              height: "auto",
              boxShadow: "0px 0px 3px 0.5px #ced5e2"
            }}
          >
            <a href="#">
              <CardHeader>Хочу отправить книги</CardHeader>
              <CardBody>
                <SPointsWrapper>
                  <div>
                    <LocationIcon />
                    <p>Бишкек, Кыргызстан</p>
                  </div>
                  <div>
                    <LocationIcon />
                    <p>Москва, Россия</p>
                  </div>
                </SPointsWrapper>
                <BoxIcon />
                <SDatePriceWrapper>
                  <h6>сроки доставки</h6>
                  <h6>вознаграждение</h6>
                </SDatePriceWrapper>
              </CardBody>
            </a>

            <CardFooter
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <a href="#">Ирина Кайратовна</a>

              <SButton>Предложить доставить</SButton>
            </CardFooter>
          </Card>
          <Card
            xs="4"
            style={{
              width: "30%",
              padding: "1em 1em",
              height: "auto",
              boxShadow: "0px 0px 3px 0.5px #ced5e2"
            }}
          >
            <a href="#">
              <CardHeader>Хочу отправить книги</CardHeader>
              <CardBody>
                <SPointsWrapper>
                  <div>
                    <LocationIcon />
                    <p>Алматы, Казахстан</p>
                  </div>
                  <div>
                    <LocationIcon />
                    <p>Астана, Казахстан</p>
                  </div>
                </SPointsWrapper>
                <BoxIcon />
                <SDatePriceWrapper>
                  <h6>сроки доставки</h6>
                  <h6>вознаграждение</h6>
                </SDatePriceWrapper>
              </CardBody>
            </a>

            <CardFooter style={{ display: "flex" }}>
              <a href="#">Ирина Кайратовна</a>
              <SButton>Предложить доставить</SButton>
            </CardFooter>
          </Card>
          <Card
            xs="4"
            style={{
              width: "30%",
              padding: "1em 1em",
              height: "auto",
              boxShadow: "0px 0px 3px 0.5px #ced5e2"
            }}
          >
            <a href="#">
              <CardHeader>Хочу отправить книги</CardHeader>
              <CardBody>
                <SPointsWrapper>
                  <div>
                    <LocationIcon />
                    <p>Бишкек, Кыргызстан</p>
                  </div>
                  <div>
                    <LocationIcon />
                    <p>Москва, Россия</p>
                  </div>
                </SPointsWrapper>
                <BoxIcon />
                <SDatePriceWrapper>
                  <h6>сроки доставки</h6>
                  <h6>вознаграждение</h6>
                </SDatePriceWrapper>
              </CardBody>
            </a>

            <CardFooter style={{ display: "flex" }}>
              <a href="#">Ирина Кайратовна</a>
              <SButton>Предложить доставить</SButton>
            </CardFooter>
          </Card>
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

const SPointsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  div {
    display: flex;
    svg {
      width: 35px;
      height: 35px;
      margin-right: 3px;
    }
  }
`;

const SDatePriceWrapper = styled.div`
  display: flex;
`;

const SButton = styled(Button)`
  color: ${colors.dark_grey};
  border: 1.5px solid ${colors.yellow};
`;

export default TopRequests;
