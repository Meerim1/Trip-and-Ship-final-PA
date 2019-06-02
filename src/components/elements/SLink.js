import styled from "styled-components";
import { Link } from "react-router-dom";
import {colors} from "../../config/var"

 const SLink = styled(Link)`
    text-decoration: none;
    color: ${colors.dark_blue};
    &:hover{
        color: ${colors.dark_blue};
        text-decoration: none;
    }
`;

export default SLink;