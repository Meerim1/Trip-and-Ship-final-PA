import React, { Component } from "react";
import { Container } from "reactstrap";
import { Button } from "../index";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../config/var";

class HeaderTop extends Component {
  render() {
    return (
      <HeaderUpper>
        <Container>
          <HeaderUpWrapper>
            <div>
              <Link to="/">Trip and Ship</Link>
            </div>
            <div>
              <Button yellow as="a" href="/">
                Регистрация
              </Button>
              <Button dark as="a" href="/">
                Войти
              </Button>
            </div>
          </HeaderUpWrapper>
        </Container>
      </HeaderUpper>
    );
  }
}

const HeaderUpper = styled.div`
  top: 0;
  right: 0;
  position: sticky;
  background: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.light_grey};
  /* box-shadow: 2px 2px 10px ${colors.light_grey}; */
`;

const HeaderUpWrapper = styled.div`
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* a {
    text-decoration: none;
    font-weight: 600;
    transition: width 2s linear 1s;
    &:hover {
      border: 1.5px solid ${colors.yellow};
      color: ${colors.yellow};
    }
  } */
`;

export default HeaderTop;
