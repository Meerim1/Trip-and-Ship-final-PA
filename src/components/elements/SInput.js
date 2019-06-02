import styled from "styled-components";
import { colors } from "../../config/var";

const SInput = styled.input`
  margin-right: ${props => (props.right ? "2em" : "none")};
  font-family: "Rubik";
  padding: 12px 15px;
  box-sizing: border-box;
  border-radius: 2px;
  border: solid 1.2px ${colors.light_grey};
  color: ${colors.grey};
  outline: none;
  margin-bottom: ${props => (props.bottom ? "1em" : "none")};
  &:focus {
    border: solid 1.2px ${colors.yellow};
  }
  &:hover {
    border: solid 1.2px ${colors.yellow};
  }
`;

export default SInput;
