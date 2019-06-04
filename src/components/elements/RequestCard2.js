import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Card, CardFooter, CardBody, CardHeader, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { BoxIcon, LocationIcon, SButton } from "../../components";
import { colors } from "../../config/var";
import PontImg from "../../static/icons/point1.png";

class RequestCard extends Component {
  render() {
    return (
      <SCard xs="4">
        <Link to="/oneRequest">
          <SCardHeader>Хочу отправить книги</SCardHeader>
          <SCardBody>
            <SFlexDiv column>
              <LocacionDiv>
                <LocationtImg src={PontImg} />
                <span>откуда:</span>
              </LocacionDiv>
              <p> Бишкек,</p>
              <p>Кыргызстан</p>
            </SFlexDiv>
            <SFlexDiv column>
              <LocacionDiv>
                <LocationtImg src={PontImg} />
                <span>куда:</span>
              </LocacionDiv>
              <p> Москва,</p>
              <p>Россия</p>
            </SFlexDiv>
          </SCardBody>
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
        </Link>

        <SCardFooter>
          <a href="#">Ирина Кайратовна</a>

          <LButton>Предложить доставить</LButton>
        </SCardFooter>
      </SCard>
    );
  }
}

const SFlexDiv = styled.div`
  display: flex;
  justify-content: ${props => (props.between ? "space-between" : "flex-start")};
  flex-direction: ${props => (props.column ? "column" : "row")};
  p {
    margin-bottom: 0.1em;
  }
  svg {
    width: 25px;
    height: 30px;
    margin-right: 5px;
  }
`;

const LocationtImg = styled.img`
  height: 40px;
  width: 40px;
`;

const LocacionDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

const SCardBody = styled.div`
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
  span {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.grey};
  }
  p {
    margin-top: 0;
  }
`;

const SCard = styled(Card)`
  background-color: lighten(#41c191, 50%);
  width: 30%;
  padding: 1.5em 1.1em;
  height: auto;
  box-shadow: 0px 0px 3px 0.5px #ced5e2;
  margin-bottom: 2.5em;
  a {
    text-decoration: none;
    color: ${colors.dark_grey};
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
  }
`;

const SCardHeader = styled.div`
  background-color: ${colors.white};
  font-size: 22px;
  color: ${colors.dark_blue};
`;
const SCardFooter = styled.div`
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
