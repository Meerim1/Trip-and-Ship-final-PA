import React, { Component } from "react";
import { Container } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <Container>
          <ul class="footer-nav">
            <li class="footer-nav-item col-lg-3 col-md-6 col-sm-12">
              <a href="#" class="font-link">
                Часто задаваемые вопросы
              </a>
            </li>
            <li class="footer-nav-item col-lg-3 col-md-6 col-sm-12">
              <a href="#" class="font-link">
                Пользовательское соглашение
              </a>
            </li>
            <li class="footer-nav-item col-lg-3 col-md-6 col-sm-12 footer-nav__contacts">
              <p class="font-link">Связаться с нами</p>
              <p class="font-text-sm">+996 555 678747</p>
              <p class="font-text-sm">mentor.kg@gmail.com</p>
              <div class="footer-nav__contacts__icons">
                <a
                  class="footer-nav__contacts__icons__icon"
                  id="icon-whatsapp"
                />
                <a class="footer-nav__contacts__icons__icon" id="icon-fb" />
                <a
                  class="footer-nav__contacts__icons__icon"
                  id="icon-instagram"
                />
                <a
                  class="footer-nav__contacts__icons__icon"
                  id="icon-telegram"
                />
              </div>
            </li>
            <li class="footer-nav-item col-lg-3 col-md-6 col-sm-12">
              <h2 class="font-subtitle">
                <a href="#">Mentor.kg</a>
              </h2>
            </li>
          </ul>
        </Container>
      </footer>
    );
  }
}

export default Footer;
