import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../config/var";
import { FacebookIcon, TelegramIcon, InstagramIcon } from "../../components";

class Footer extends Component {
  render() {
    return (
      <SFooter>
        <Container>
          <SFooterWrapper>
            <div>
              <Link to="/">Trip and Ship</Link>
            </div>
            <SFooterUl>
              <li>
                <Link to="/qa">Вопросы-ответы</Link>
              </li>
              <li>
                <Link to="/howitwroks">Как это работает</Link>
              </li>
            </SFooterUl>
            <SFooterUl>
              <li>
                <Link to="/qa">Советы для путешественников</Link>
              </li>
              <li>
                <Link to="/howitwroks">Советы для отправителей</Link>
              </li>
            </SFooterUl>
            <SFooterUl>
              <li>
                <Link to="/trips">Все поездки</Link>
              </li>
              <li>
                <Link to="/requests">Все заявки</Link>
              </li>
            </SFooterUl>
            <SFooterContacts>
              <p>Мы в соцсетях:</p>
              <SFooterIcons>
                <a>
                  <TelegramIcon />
                </a>
                <a>
                  <FacebookIcon />
                </a>

                <a>
                  <InstagramIcon />
                </a>
              </SFooterIcons>
            </SFooterContacts>
          </SFooterWrapper>
        </Container>
      </SFooter>
    );
  }
}

const SFooter = styled.footer`
  padding: 2em 0;
  width: 100%;
  background-color: #000015;
  color: #fefefe;
`;

const SFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.8em;
  a {
    color: ${colors.white};
    font-size: 14px;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      color: ${colors.yellow};
    }
  }
`;

const SFooterUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  a {
    font-weight: 400;
  }
`;

const SFooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 5px;
  }
`;
const SFooterIcons = styled.div`
  display: flex;

  a {
    width: 2em;
    height: 2em;
    margin-right: 0.5em;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
export default Footer;
