import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import colors from "../../config/var";

class SectionBlock extends Component {
  render() {
    return <SSectionBlock >{this.props.children}</SSectionBlock>;
  }
}

const SSectionBlock = styled.div`
  background-color:  "#fefefe";
  padding: 4em 0;
  height: auto;
`;

export default SectionBlock;
