import React, { Component } from "react";
import { Container } from "reactstrap";
import { Layout, SimpleSlider } from "../components";
import {
  SectionBlock,
  Title,
  SearchBox,
  TitleCenter,
  TopRequests,
  TopTrips,
  TextBlock,
  BackgroundWrapper
} from "../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

class MainPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <SectionBlock>
            <Title />
            <SearchBox />
          </SectionBlock>
        </Container>
        <BackgroundWrapper>
          <Container>
            <SectionBlock>
              <TitleCenter>Новые заявки</TitleCenter>
              <TopRequests />
            </SectionBlock>
            <SectionBlock>
              <TitleCenter>Последние путешествия</TitleCenter>
              <TopTrips />
            </SectionBlock>
          </Container>
        </BackgroundWrapper>
        <Container>
          <SectionBlock>
            <TitleCenter>Хотите отправить или можете доставить посылку?</TitleCenter>
          </SectionBlock>
          <SectionBlock>
            <TitleCenter>Отзывы пользователей</TitleCenter>
            <SimpleSlider />
          </SectionBlock>
        </Container>
      </Layout>
    );
  }
}

const SBackgrounf = styled(SectionBlock)`
  background-image: url("")
`

export default MainPage;
