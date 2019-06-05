import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { colors } from "../../config/var"

class Title extends Component {
  render() {
    return (
      <Fragment>
        <STitle regular>Отправляйте посылки через путешественников</STitle>
        <STitle bold>Экономьте на доставках</STitle>
      </Fragment>
    );
  }
}

const STitle = styled.h2`
  font-family: "Rubik", sans-serif;
  font-weight: ${props => (props.regular ? "400" : props.bold ? "500" : "300")};
  color: ${colors.dark_blue}
`;



export default Title;
