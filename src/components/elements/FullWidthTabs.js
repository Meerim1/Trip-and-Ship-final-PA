import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { colors } from "../../config/var";
import { RequestCard, TripCard } from "../../components";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Заявки" />
          <Tab label="Путешествия" />
          <Tab label="Отзывы" />
        </Tabs>
      </Paper>
      {value === 0 && (
        <TabContainer>
          <RequestWrapper>
            <RequestCard />
            <RequestCard />
            <RequestCard />
          </RequestWrapper>
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <TripWrapper>
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
          </TripWrapper>
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <div style={{ height: "500px" }} />
        </TabContainer>
      )}
    </div>
  );
}

const classes = () => ({
  tabs: {
    backgroudColor: "white"
  }
});

const RequestWrapper = styled.div`
  align-items: center;
  justify-content: space-around;
  padding-top: 1.5em;
  display: flex;
  flex-wrap: wrap;
  margin-right: 10px;

  font-family: ${props => props.theme.font};
  a {
    text-decoration: none;
    color: ${colors.dark_grey};
  }
`;

const TripWrapper = styled.div`
  padding-top: 3.5em;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default SimpleTabs;
