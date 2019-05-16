import React, { Component } from "react";
import { Container } from "reactstrap";
import { Layout } from "../components";
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
            <TitleCenter>Хотите отправить посылку?</TitleCenter>
            <TextBlock>
              Some fsdfsfsddksjh dfskh dsfskhfks sdfhshff sdhfksfh hhhhhhhhhhhhh
            </TextBlock>
          </SectionBlock>
        </Container>
      </Layout>
    );
  }
}

export default MainPage;
