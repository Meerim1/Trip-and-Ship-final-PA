import React, { Component, Fragment } from "react";
import styled from "styled-components";

class Title extends Component {
  render() {
    return (
      <Fragment>
        <STitle>Отправляйте посылки через путешественников</STitle>
        <STitleBold>Экономьте на доставках</STitleBold>
      </Fragment>
    );
  }
}

const STitle = styled.h2`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
`;

const STitleBold = styled(STitle)`
  font-weight: 600;
`;

export default Title;
