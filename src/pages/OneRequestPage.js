import React, { Component } from "react";
import { Container } from "reactstrap";
import { Layout, TitleCenter, STitle, SectionBlock } from "../components";

class OneRequestPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <SectionBlock>
            <STitle>Детали заявки</STitle>
          </SectionBlock>
        </Container>
      </Layout>
    );
  }
}

export default OneRequestPage;
