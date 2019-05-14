import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import colors from "../../config/var";

class SectionBlock extends Component {
  render() {
    return <SSectionBlock>{this.props.children}</SSectionBlock>;
  }
}

const SSectionBlock = styled.div`
  padding: 4em 0;
  height: 400px;
  border-bottom: 1px solid ${colors.light_grey};
  display: ${props => (props.flex ? "flex" : "block")};
  justify-content: ${props => (props.flex ? "center" : "false")};
`;

export default SectionBlock;
