import React from "react";
import styled from "styled-components";
import AvImg from "../../static/images/avatar.jpg";

function UserCard() {
  return <Avatar src={AvImg} />;
};

const Avatar = styled.img`
  width: 100px;
  height: 105px;
  border-radius: 50%;
  box-shadow: 0px 0px 3px 3px #ced5e2;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

 export default UserCard;