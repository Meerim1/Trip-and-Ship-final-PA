import styled from "styled-components";
import colors from "../../config/var";

const Button = styled.button`
  background-color: ${props => (props.yellow ? "#41c191" : "white")};
  color: ${props => (props.yellow ? "#fefefe" : "#333d42")};
  box-sizing: border-box;
  border: 1.5px solid ${props => (props.yellow ?"#41c191" : "#333d42")};
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
  &:hover{
      color: ${props => (props.yellow ? "#fefefe" : "#232f34")};
      text-decoration: none;
  }
`;

export default Button;