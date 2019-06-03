import React, { Component } from "react";
import { Container } from "reactstrap";
import {
  Layout,
  STitle,
  SectionBlock,
  UserCard,
  BackgroundWrapper,
  WhiteBackground
} from "../components";
import styled from "styled-components";
import PontImg from "../static/icons/point1.png";
import { colors } from "../config/var";
import DateImg from "../static/icons/date.png";
import CommentImg from "../static/icons/comment.png";
import PhotoImg from "../static/icons/photo.png";
import WeightImg from "../static/icons/weight.png";
import MoneyImg from "../static/icons/money.png";

class OneRequestPage extends Component {
  render() {
    return (
      <Layout>
        <BackgroundWrapper paddingTop paddingBottom>
          <Container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <WhiteBackground main>
              <STitle>Детали заявки</STitle>
              <FlexWrapper paddingTop>
                <h5>Хочу отправить телефон</h5>
                <h6>Актуально</h6>
              </FlexWrapper>
              <PointsWrap>
                <FlexWrapper column>
                  <LocationDiv>
                    <LocationtImg src={PontImg} />
                    <span>откуда:</span>
                  </LocationDiv>
                  <p> Бишкек, Кыргызстан</p>
                </FlexWrapper>
                <FlexWrapper column>
                  <LocationDiv>
                    <LocationtImg src={PontImg} />
                    <span>куда:</span>
                  </LocationDiv>
                  <p> Москва, Россия</p>
                </FlexWrapper>
              </PointsWrap>
              <LocationDiv>
                <SIcon src={DateImg}  />
                <span>доставить до:</span>
                <p>23/07/2019</p>
              </LocationDiv>
              <LocationDiv>
                <SIcon src={MoneyImg}/>
                <span>вознаграждение:</span>
                <p>1000</p>
                <p>сом</p>
              </LocationDiv>
              <LocationDiv >
              <SIcon src={WeightImg}/>
                <span>вес посылки:</span>
                <p>более 500</p>
                <p>гр</p>
              </LocationDiv>
            </WhiteBackground>
            <WhiteBackground>
              <STitle>Автор</STitle>
              <UserCard />
            </WhiteBackground>
          </Container>
        </BackgroundWrapper>
      </Layout>
    );
  }
}

const LocationtImg = styled.img`
  height: 40px;
  width: 40px;
`;

const SIcon = styled.img`

  width:40px;
  height:40px;
`;

const LocationDiv = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
  img{
    margin-right: 0.5em;
  }
  span {
    font-size: 11px;
    font-weight: 600;
    color: ${colors.grey};
    margin-right: 0.5em;

    text-transform: uppercase;
  }
  p {
    margin-left: 0.2em;
    margin-bottom: 0;
  }
`;

const PointsWrap = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
`;

const FlexWrapper = styled.div`
  padding-top: ${props => (props.paddingTop ? "2em" : "0")};
  width: 100%;
  display: flex;
  justify-content: ${props => (props.start ? "start" : "space-between")};
  flex-direction: ${props => (props.column ? "column" : "row")};
  margin-bottom: 1em;
  align-items: flex-start;
  h6 {
    color: green;
    font-size: 14px;
  }
  p{
    
  }
`;

export default OneRequestPage;
