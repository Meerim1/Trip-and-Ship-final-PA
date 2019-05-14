import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import styled from "styled-components";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <HeaderTop />
        <HeaderBottom />
        <Content>{this.props.children}</Content>
        <Footer />
      </Fragment>
    );
  }
}

const Content = styled.div`
  margin: 0 auto;
`

export default Layout;
