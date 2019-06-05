import styled from "styled-components";

const SForm = styled.form`
  margin: 3em 0 2.5em 0;
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.row ? "row" : "column")};
  width: ${props => (props.full ? "100%" : props.medium ? "80%" : "50")};
  align-items: center;
  text-align: center;
`;

export default SForm;
