import styled from "styled-components";
import colors from "../../config/var";

const SInput = styled.input`
  font-family: "Rubik";
  padding: 10px 10px;
  box-sizing: border-box;
  border-radius: 2px;
  border: solid 1px ${colors.light_grey};
  color: ${colors.grey};
  outline: none;
  margin-bottom:1em;
  &:focus {
    border: solid 1.5px ${colors.yellow};
  }
`;

export default SInput;