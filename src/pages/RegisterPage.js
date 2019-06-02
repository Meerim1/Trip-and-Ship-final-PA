import React, { Component } from "react";
import { Container } from "reactstrap";
import {
  SectionBlock,
  Layout,
  SInput,
  STitle,
  SForm,
  SLabel,
  InputWithLabel
} from "../components";

class RegisterPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <SectionBlock>
            <STitle>Регистрация</STitle>
            <SForm action="#">
              <InputWithLabel>
                <SLabel>Почта</SLabel>
              </InputWithLabel>
              <InputWithLabel>
                <SLabel>Имя</SLabel>
              </InputWithLabel>
              <InputWithLabel>
                <SLabel>Фамилия</SLabel>
              </InputWithLabel>
              <SInput bottom placeholder="Дата Рождения" type="date" />
              <InputWithLabel>
                <SLabel>Пароль</SLabel>
              </InputWithLabel>
              <InputWithLabel>
                <SLabel>Подтверждение пароля</SLabel>
              </InputWithLabel>
            </SForm>
          </SectionBlock>
        </Container>
      </Layout>
    );
  }
}
export default RegisterPage;
