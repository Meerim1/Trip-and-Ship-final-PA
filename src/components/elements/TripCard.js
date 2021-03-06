import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LocationIcon, UserAvatar, SButton, SLink } from "..";
import AvImg from "../../static/images/avatar.jpg";
import PontImg from "../../static/icons/point1.png";
import { colors } from "../../config/var";
import { Button } from "@material-ui/core";
import PT from "prop-types";

class TripCard extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextProps.id !== this.props.id ||
  //     nextProps.delivery !== this.props.delivery.delivery ||
  //     nextProps.width !== this.props.width ||
  //     nextProps.height !== this.props.height ||
  //     nextProps.url !== this.props.url
  //   );
  // }
  render() {
    const {
      id,
      startPoint,
      endPoint,
      delivery,
      dateOfDisactivate,
      description,
      transport,
      status,
      dateOfCreation,
      download_url
    } = this.props;

    return (
      <SCardWrapper key={id}>
        <SLink to="/oneTrip">
          <SCard>
            <Avatar src={download_url} />
            <SCardHeader>
              <h5>{delivery.fio}</h5>
              <SDate>
                <span>Дата выезда:</span>
                <p>{dateOfDisactivate}</p>
              </SDate>
            </SCardHeader>
            <SCardBody>
              <SFlexDiv column>
                <LocacionDiv>
                  <LocationtImg src={PontImg} />
                  <span>откуда:</span>
                </LocacionDiv>
                <p>{startPoint}</p>
              </SFlexDiv>
              <SFlexDiv column>
                <LocacionDiv>
                  <LocationtImg src={PontImg} />
                  <span>куда:</span>
                </LocacionDiv>
                <p>{endPoint}</p>
              </SFlexDiv>
            </SCardBody>
            <SFooter>
              <Button color="primary">Предложить доставить</Button>
            </SFooter>
          </SCard>
        </SLink>
      </SCardWrapper>
    );
  }
}

const SCardWrapper = styled.div`
  width: 40%;
  margin-bottom: 1em;
  margin-top: 2em;
`;

const SCard = styled.div`
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  padding: 1em 2em;
  box-shadow: 0px 0px 3px 0.8px ${colors.shadow2};
  margin-bottom: 2.5em;
  position: relative;
  &:hover {
    box-shadow: 0px 0px 6px 2.2px ${colors.shadow1};
  }
  p {
    margin-bottom: 0;
  }
`;
const Avatar = styled.img`
  width: 90px;
  height: 95px;
  border-radius: 50%;
  position: absolute;
  top: -20%;
  left: 39%;
  box-shadow: 0px 0px 3px 3px #ced5e2;
`;

const LocationtImg = styled.img`
  height: 40px;
  width: 40px;
`;

const SCardHeader = styled.div`
  padding-top: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.grey};
  }
`;

const SFooter = styled.div`
  margin-top: 1em;
`;

const SCardBody = styled.div`
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
  span {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.grey};
  }
  p {
    margin-top: 0;
  }
`;

const SFlexDiv = styled.div`
  display: flex;
  justify-content: ${props => (props.between ? "space-between" : "flex-start")};
  flex-direction: ${props => (props.column ? "column" : "row")};
  svg {
    width: 25px;
    height: 30px;
    margin-right: 5px;
  }
`;

const SDate = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LocacionDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

TripCard.propTypes = {
  id: PT.number,
  delivery: PT.object,
  width: PT.number,
  height: PT.number,
  trips: PT.object.isRequired,
  download_url: PT.string
};

TripCard.defaultProps = {
  delivery: "Алия Маликова",
  width: 321,
  height: 123,
  download_url:
    "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F634336%2Fscreenshots%2F2246883%2F_____.png&f=1"
};

export default TripCard;
