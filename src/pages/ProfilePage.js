import React, { Component } from "react";
import styled from "styled-components";
import {
  Layout,
  SectionBlock,
  StarIcon,
  BackgroundWrapper
} from "../components";
import { Container } from "reactstrap";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AvImg from "../static/images/avatar.jpg";
import BImg from "../static/images/plane.jpeg";
import { colors } from "../config/var";

const styles = () => ({});

class ProfilePage extends Component {
  render() {
    const classes = this.props;
    return (
      <Layout>
        <BackgroundImage>
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
              <span />
            </TripsReqBlock>
          </ProfileUpperBlock>
          </SectionBlock>
            </Container>
        </BackgroundImage>
        <Container>
          <span></span>
        </Container>
      </Layout>
    );
  }
};

const BackgroundImage = styled.div`
    background-image: url('../static/images/plane.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;

`;

const ProfileInfoBlock = styled.div`
  display: flex;
  width: 70%;
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
  border: 2px solid #d0d0f5;
  border-radius: 3px;
  /* background-color: #e5e5e5; */
  padding: 1.5em 1em;
`;

const UserInfoBlock = styled.div`
  margin-left: 15px;
  display: flex;
  width: 60%;
  justify-content: space-around;
  flex-direction: column;
  h6 {
    color: #717171;
    font-size: 14px;
  }
`;

const TripsReqBlock = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
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
`;

const Avatar = styled.img`
  width: 125px;
  height: 130px;
  border-radius: 50%;
`;

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfilePage);
