import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../../App.scss"


class Header extends Component {
  render() {
    return (
      <header className="header">
        <Container>
          <div className="header-upper">
            <div className="header-upper-wrapper">
              <div className="header__header-upper__logo font-subtitle">
                <Link to="/">Trip and Ship</Link>
              </div>
              <ul className="header__header-upper__nav">
                <li className="header__header-upper__nav__nav-item font-link">
                  <Link to="#">О проекте</Link>
                </li>
                <li className="header__header-upper__nav__nav-item font-link">
                  <Link to="/blog">Искать предложения</Link>
                </li>
                <li className="header__header-upper__nav__nav-item font-link">
                  <Link to="/mentors">Могу доставить</Link>
                </li>
              </ul>
            </div>
            <div className="header-upper-wrapper">
              <ul className="header__header-upper__navbar-langs">
                <li className="header__header-upper__navbar-langs__lang font-subtitle">
                  RU
                </li>
              </ul>
              <div className="header__header-upper__navbar__btn btn btn-warninh">
                <a href="#">Регистрация</a>
              </div>
              <div className="header__header-upper__navbar__btn btn btn-white">
                <a href="#">Войти</a>
              </div>
            </div>
          </div>
        </Container>
      </header>
    );
  }
};

export default Header;
