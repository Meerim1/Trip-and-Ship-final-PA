import React, { Component } from "react";
import { Container } from "reactstrap";
import {
  Layout,
  TitleCenter,
  STitle,
  SectionBlock,
  BackgroundWrapper,
  WhiteBackground,
  UserCard,
  RequestCard2
} from "../components";

class OneTripPage extends Component {
  render() {
    return (
      <Layout>
        <BackgroundWrapper paddingTop paddingBottom>
          <Container
            // style={{ display: "flex", justifyContent: "space-between" }}
          >
            <WhiteBackground full>
              <STitle>Детали поездки</STitle>
              <RequestCard2 />
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

export default OneTripPage;
