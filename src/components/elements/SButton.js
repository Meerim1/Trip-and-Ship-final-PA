import styled from "styled-components";
import { colors } from "../../config/var";
import { Link } from "react-router-dom";

const SButton = styled(Link)`
  background-color: ${props => (props.yellow ? colors.yellow : colors.white)};
  color: ${props => (props.yellow ? colors.white : colors.dark_blue)};
  box-sizing: border-box;
  border: 1.5px solid
    ${props => (props.yellow ? colors.yellow : colors.dark_blue)};
  text-decoration: none;
  margin: 0 0 0 10px;
  outline: none;
  font-family: "Rubik";
  font-style: normal;
  font-stretch: normal;
  font-weight: ${props => (props.yellow ? "600" : "400")};
  border-radius: 5px;
  font-size: 13px;
  letter-spacing: 0.05rem;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  z-index: 0;
  padding: 0.3em 1em;
  &:hover {
    border: 1.5px solid ${colors.yellow};
    color: ${props => (props.yellow ? "#fefefe" : colors.yellow)};
    text-decoration: none;
  }
`;

export default SButton;
