import React from "react";
import styled from "styled-components";
import AvImg from "../../static/images/avatar.jpg";

function UserCard() {
  return (
    <UserWrapper>
      <Avatar src={AvImg} />
    </UserWrapper>
  );
}

const UserWrapper = styled.div`
  padding-top: 1.1em;
`;

const Avatar = styled.img`
  width: 70px;
  height: 75px;
  border-radius: 50%;
  box-shadow: 0px 0px 3px 3px #ced5e2;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default UserCard;
