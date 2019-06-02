import React, { Component } from "react";
import { Container } from "reactstrap";
import { Layout, TitleCenter, STitle, SectionBlock } from "../components";

class OneTripPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <SectionBlock>
            <STitle>Детали поездки</STitle>
          </SectionBlock>
        </Container>
      </Layout>
    );
  }
}

export default OneTripPage;
