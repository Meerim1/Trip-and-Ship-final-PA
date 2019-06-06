import styled from "styled-components";
import { colors } from "../../config/var";

const BackgroundWrapper = styled.div`
    background-color: ${colors.background_grey};
    height: auto;
    padding-top: ${props => (props.paddingTop? "1.5em" : "0")};
    padding-bottom: ${props => (props.paddingBottom? "6em" : "0")};
`;

export default BackgroundWrapper;