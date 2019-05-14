import React, { Component } from "react";
import { Container } from "reactstrap";
import { Layout } from "../components";
import { SectionBlock, Title, SearchBox, TitleCenter, TopRequests, TopTrips, TextBlock } from "../components";

class MainPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <SectionBlock>
            <Title />
            <SearchBox />
          </SectionBlock>
          <SectionBlock flex="true">
            <TitleCenter>Последние заявки</TitleCenter>
            <TopRequests />
          </SectionBlock>
          <SectionBlock flex="true">
            <TitleCenter>Последние путешествия</TitleCenter>
            <TopTrips />
          </SectionBlock>
          <SectionBlock>
          <TitleCenter>Хотите отправить посылку?</TitleCenter>
          <TextBlock>Some fsdfsfsddksjh dfskh dsfskhfks sdfhshff sdhfksfh hhhhhhhhhhhhh</TextBlock>
          </SectionBlock>
        </Container>
      </Layout>
    );
  }
};

export default MainPage;
