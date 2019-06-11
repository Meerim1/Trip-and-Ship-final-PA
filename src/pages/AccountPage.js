import React, { Component } from "react";
import styled from "styled-components";
import {
  Layout,
  SectionBlock,
  StarIcon,
  FullWidthTabs,
  BackgroundWrapper,
  WhiteBackground
} from "../components";
import { Container } from "reactstrap";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AvImg from "../static/images/avatar.jpg";
import BImg from "../static/images/airplane.jpeg";

const styles = () => ({});

class AccountPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const classes = this.props;
    return (
      <Layout>
        <BackgroundImage>
          <div style={{ position: "relative" }}>
            <Container>
              <SectionBlock>
                <ProfileUpperBlock>
                  <ProfileInfoBlock>
                    <Avatar src={AvImg} />
                    <UserInfoBlock>
                      <h4>Елена Малышева</h4>
                      <SignDate start>
                        <h6>Дата регистрации: </h6>
                        <p>23/04/2019</p>
                      </SignDate>
                      <FlexWrapper column>
                        <h6>Рейтинг отправителя</h6>
                        <Rating>
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                        </Rating>
                        <br />
                        <h6>Рейтинг доставителя</h6>
                        <Rating>
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                        </Rating>
                      </FlexWrapper>
                    </UserInfoBlock>
                  </ProfileInfoBlock>
                  <TripsReqBlock>
                    <FlexWrapper
                      style={{ marginTop: "0", justifyContent: "center" }}
                      column
                    >
                      <FlexWrapper start end>
                        <h6>Заявок:</h6>
                        <span>10</span>
                      </FlexWrapper>
                      <FlexWrapper start>
                        <h6>Путешествий:</h6>
                        <span>10</span>
                      </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper column />
                  </TripsReqBlock>
                </ProfileUpperBlock>
              </SectionBlock>
            </Container>
          </div>
        </BackgroundImage>
        <BackgroundWrapper paddingBottom>
          <Container>
            <WhiteBackground full>
              <FullWidthTabs />
            </WhiteBackground>
          </Container>
        </BackgroundWrapper>
      </Layout>
    );
  }
}

const BackgroundImage = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${BImg});
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: grayscale(60%);
  }
  color: white;
`;

const ProfileInfoBlock = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;
`;

const SignDate = styled.div`
  margin-top: 1em;
  display: flex;
  width: 100%;
  h6 {
    margin-top: 4px;
  }
  p {
    margin-left: 10px;
  }
`;
const ProfileUpperBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  border: 0.3px solid #d0d0f5;
  box-shadow: 0px 0px 5px #d0d0f5;
  border-radius: 3px;
  padding: 2.5em 1em;
`;

const UserInfoBlock = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  flex-direction: column;

  h6 {
    color: #d0d0f5;
    font-size: 14px;
  }
`;

const TripsReqBlock = styled.div`
  padding-left: 3em;
  border-left: 1px solid #d0d0f5;
  display: flex;
  width: 30%;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  h6 {
    color: #d0d0f5;
    font-size: 14px;
    margin-top: 1em;
    margin-right: 1em;
    margin-bottom: 0;
  }
  span {
    font-size: 25px;
  }
`;
const Rating = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const FlexWrapper = styled.div`
  margin-top: 0.5em;
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  justify-content: ${props => (props.start ? "start" : "space-between")};
  align-content: ${props => (props.enf ? "flex-end" : "start")};
`;

const Avatar = styled.img`
  width: 125px;
  height: 130px;
  border-radius: 50%;
`;

AccountPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountPage);
