import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BoxIcon } from "..";
import { colors } from "../../config/var";
import PontImg from "../../static/icons/point1.png";
import { Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
  button: {
    padding: "0 0"
  }
}) 

class RequestCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <SCard xs="4">
        <Link to="/oneRequest">
          <SCardHeader>Хочу отправить книги</SCardHeader>
          <SCardBody>
            <SFlexDiv column>
              <LocacionDiv>
                <LocationtImg src={PontImg} />
                <span>откуда:</span>
              </LocacionDiv>
              <p> Бишкек,</p>
              <p>Кыргызстан</p>
            </SFlexDiv>
            <SFlexDiv column>
              <LocacionDiv>
                <LocationtImg src={PontImg} />
                <span>куда:</span>
              </LocacionDiv>
              <p> Москва,</p>
              <p>Россия</p>
            </SFlexDiv>
          </SCardBody>
          <BoxIcon />
          <SDatePriceWrapper>
            <SDate>
              <span>доставить до:</span>
              <p>29/07/2019</p>
            </SDate>

            <SPrice>
              <span>вознаграждение:</span>
              <p>
                400 сом
              </p>
            </SPrice>
          </SDatePriceWrapper>
        </Link>

        <SCardFooter>
          <a href="#">Ирина Кайратовна</a>
          <Button className={classes.button} variant="outlined" color="primary">Предложить доставить</Button>
        </SCardFooter>
      </SCard>
    );
  }
}

const SFlexDiv = styled.div`
  display: flex;
  justify-content: ${props => (props.between ? "space-between" : "flex-start")};
  flex-direction: ${props => (props.column ? "column" : "row")};
  p {
    margin-bottom: 0.1em;
  }
  svg {
    width: 25px;
    height: 30px;
    margin-right: 5px;
  };
  span {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.grey};
  }
`;

const LocationtImg = styled.img`
  height: 40px;
  width: 40px;
`;

const LocacionDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

const SCardBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
  /* border: 1px solid red; */
  p {
    margin-top: 0;
  }
`;

const SCard = styled.div`
  background-color: lighten(#41c191, 50%);
  color: ${colors.dark_blue};
  width: 30%;
  padding: 1.8em 1.5em;
  height: auto;
  box-shadow: 0px 0px 3px 0.5px #ced5e2;
  margin-bottom: 2.5em;
  border-radius: 3px;
  background-color: ${colors.white};
  &:hover{
    box-shadow: 0px 0px 6px 2.2px ${colors.shadow1};
  };
  a {
    text-decoration: none;
    color: ${colors.dark_grey};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  };
`;

const SCardHeader = styled.div`
  background-color: ${colors.white};
  font-size: 22px;
  color: ${colors.dark_blue};
  margin-bottom: 0.8em;
`;
const SCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SPointsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  div {
    display: flex;
    svg {
      width: 35px;
      height: 35px;
      margin-right: 3px;
    }
  }
`;

const SDatePriceWrapper = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.grey};
  }
`;

const SPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const SDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h6 {
  }
`;


export default withStyles(styles)(RequestCard);
