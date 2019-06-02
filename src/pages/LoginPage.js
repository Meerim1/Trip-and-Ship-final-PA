import React, { Component } from "react";
import { Container } from "reactstrap";
import { SectionBlock, Layout, SInput, STitle, SForm } from "../components";

class LoginPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <SectionBlock>
            <STitle>Войти</STitle>
            <SForm>
              <SInput bottom placeholder="Почта" />
              <SInput bottom placeholder="Пароль" type="password" />
            </SForm>
          </SectionBlock>
        </Container>
      </Layout>
    );
  }
}
export default LoginPage;
