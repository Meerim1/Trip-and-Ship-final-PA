import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Card, CardFooter, CardBody, CardHeader, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { BoxIcon, LocationIcon, SButton } from "../../components";
import { colors } from "../../config/var";

class RequestCard extends Component {
  render() {
    return (
      <SCard xs="4">
        <Link to="/oneRequest">
          <SCardHeader>Хочу отправить книги</SCardHeader>
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
              <SPrice>
                <h6>оплата</h6>
                <p>
                  400 <span>сом</span>
                </p>
              </SPrice>
            </SDatePriceWrapper>
          </CardBody>
        </Link>

        <SCardFooter>
          <a href="#">Ирина Кайратовна</a>

          <LButton>Предложить доставить</LButton>
        </SCardFooter>
      </SCard>
    );
  }
}

const SCard = styled(Card)`
  background-color: lighten(#41c191, 50%);
  width: 30%;
  padding: 1em 1em;
  height: auto;
  box-shadow: 0px 0px 3px 0.5px #ced5e2;
  margin-bottom: 2.5em;
`;

const SCardHeader = styled(CardHeader)`
  background-color: ${colors.white};
  font-size: 22px;
  color: ${colors.dark_blue};
`;
const SCardFooter = styled(CardFooter)`
  display: flex;
  justify-content: space-between;
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
  justify-content: space-between;
`;

const SPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h6 {
  }
`;
const LButton = styled(SButton)`
  color: ${colors.dark_grey};
  border: 1.5px solid ${colors.yellow};
`;
export default RequestCard;
