import React, { Component } from "react";
import { Container } from "reactstrap";
import { SButton } from "../index";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme, colors } from "../../config/var";
import { Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    padding: "0.1em 1em",
    "&$hover" :{
      backgroundColor: "white"
    }
  }
});

class HeaderTop extends Component {
  render() {
    const { classes } = this.props;
    return (
      <SHeaderUpper>
        <Container>
            <SHeaderUpWrapper>
              <SHeaderLogo>
                <Link to="/">Trip and Ship</Link>
              </SHeaderLogo>
              <BtnGroup>
                {/* <SButton dark to="/login">
                  Войти
                </SButton>
                <SButton yellow to="/register">
                  Регистрация
                </SButton> */}
                <Button className={classes.button} variant="outlined" color="primary">Войти</Button>

                <Button className={classes.button} variant="contained" color="primary">Регистрация</Button>
              </BtnGroup>
            </SHeaderUpWrapper>
        </Container>
      </SHeaderUpper>
    );
  }
}

const BtnGroup = styled.div`
  display: flex;
  width:20%;
  justify-content: space-between;
`

const SHeaderUpper = styled.div`
  top: 0;
  right: 0;
  position: sticky;
  background: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.light_grey};
  box-shadow: 1px 1px 5px ${colors.light_grey};
`;

const SHeaderUpWrapper = styled.div`
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${props => props.theme.font};
`;

const SHeaderLogo = styled.div`
  a {
    color: ${colors.dark_blue};
    font-weight: 600;
    &:hover {
      text-decoration: none;
      color: ${colors.yellow};
    }
  }
`;
export default withStyles(styles)(HeaderTop);
