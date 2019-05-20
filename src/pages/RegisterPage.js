import React, { Component } from "react";
import { Container } from "reactstrap";
import { SectionBlock, Layout, SInput, STitle, SForm } from "../components";

class RegisterPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <SectionBlock>
            <STitle>Регистрация</STitle>
            <SForm>
            <SInput placeholder="Почта"/>
            <SInput placeholder="Имя" />
            <SInput placeholder="Фамилия" />
            <SInput placeholder="Дата Рождения" type="date"/>
            <SInput placeholder="Пароль" type="password" />
            <SInput placeholder="Подтверждение пароля" type="password" />
            </SForm>
          </SectionBlock>
        </Container>
      </Layout>
    );
  }
}
export default RegisterPage;
