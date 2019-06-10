import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { colors } from "../../config/var";

class HeaderBottom extends Component {
  render() {
    return (
      <HeaderDown>
        <Container>
          <ThemeProvider theme={theme}>
            <HeaderNav>
              <Navlink className="font-link">
                <Link to="/">Главная</Link>
              </Navlink>
              <Navlink className="font-link">
                <Link to="/requests">Все заявки</Link>
              </Navlink>
              <Navlink className="font-link">
                <Link to="/trips">Все путешествия</Link>
              </Navlink>
              <Navlink className="font-link">
                <Link to="/newTrip">Добавить путешествие</Link>
              </Navlink>
              <Navlink className="font-link">
                <Link to="/newRequest">Добавить заявку</Link>
              </Navlink>
            </HeaderNav>
          </ThemeProvider>
        </Container>
      </HeaderDown>
    );
  }
}

const theme = {
  font: "Rubik"
};

const HeaderDown = styled.div`
  padding: 1em 0;
`;

const HeaderNav = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  margin-bottom: 0;
`;

const Navlink = styled.li`
  font-weight: bold;
  margin-right: 1.5em;
  color: ${colors.dark_blue};
  &:hover {
    color: ${colors.yellow};
  }
  a {
    font-family: ${props => props.theme.font};
    font-weight: 500;
    color: ${colors.dark_blue};
    text-decoration: none;
    &:hover {
      color: ${colors.yellow};
    }
  }
`;

export default HeaderBottom;
