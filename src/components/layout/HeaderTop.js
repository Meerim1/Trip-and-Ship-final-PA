import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme, colors } from "../../config/var";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const styles = theme => ({
  button: {
    padding: "0.1em 1em",
    "&$hover": {
      backgroundColor: "white"
    }
  }
});

class HeaderTop extends Component {
  render() {
    const { user, classes } = this.props;
    return (
      <SHeaderUpper>
        <Container>
          <SHeaderUpWrapper>
            <SHeaderLogo>
              <Link to="/">Trip and Ship</Link>
            </SHeaderLogo>
            <BtnGroup>
              {user.isLogedIn ? (
                <>
                  <Button
                    className={classes.button}
                    variant="outlined"
                    color="primary"
                  >
                    <Link
                      style={{ color: "inherit", textDecoration: "none" }}
                      to="/account"
                    >
                      Личный кабинет
                    </Link>
                  </Button>

                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                  >
                    <Link
                      style={{ color: "inherit", textDecoration: "none" }}
                      to="/registration"
                    >
                      Выйти
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    className={classes.button}
                    variant="outlined"
                    color="primary"
                  >
                    <Link
                      style={{ color: "inherit", textDecoration: "none" }}
                      to="/login"
                    >
                      Войти
                    </Link>
                  </Button>

                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                  >
                    <Link
                      style={{ color: "inherit", textDecoration: "none" }}
                      to="/registration"
                    >
                      Регистрация
                    </Link>
                  </Button>
                </>
              )}
            </BtnGroup>
          </SHeaderUpWrapper>
        </Container>
      </SHeaderUpper>
    );
  }
}

const BtnGroup = styled.div`
  display: flex;
  width: 22%;
  justify-content: space-between;
`;

const SHeaderUpper = styled.div`
  top: 0;
  right: 0;
  position: sticky;
  background: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.background_grey};
  box-shadow: 1px 1px 5px ${colors.grey};
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
export default connect(state => ({
  user: state.user.object,
  status: state.user.status
}))(withStyles(styles)(HeaderTop));
