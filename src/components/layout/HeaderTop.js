import React, { Component } from "react";
import { Container } from "reactstrap";
import { Button } from "../index";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import colors from "../../config/var";

class HeaderTop extends Component {
  render() {
    return (
      <SHeaderUpper>
        <Container>
          <ThemeProvider theme={theme}>
            <SHeaderUpWrapper>
              <SHeaderLogo>
                <Link to="/">Trip and Ship</Link>
              </SHeaderLogo>
              <div>
                <Button dark as="a" href="/">
                  Войти
                </Button>
                <Button yellow as="a" href="/">
                  Регистрация
                </Button>
              </div>
            </SHeaderUpWrapper>
          </ThemeProvider>
        </Container>
      </SHeaderUpper>
    );
  }
}

const theme = {
  font: "Rubik"
};

const SHeaderUpper = styled.div`
  top: 0;
  right: 0;
  position: sticky;
  background: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.light_grey};
  box-shadow: 1px 1px 5px ${colors.light_grey};
`;

const SHeaderUpWrapper = styled.div`
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${props => props.theme.font};
`;

const SHeaderLogo = styled.div`
  a {
    color: ${colors.dark_blue};
    font-weight: 600;
    &:hover{
      text-decoration: none;
      color: ${colors.yellow};
    }
  }
`;
export default HeaderTop;
