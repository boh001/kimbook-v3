import React from "react";
import { ContentInfo, InfoDate } from "./ContentHeader.style";
import moment from "moment";
import UserInfo from "Components/UserInfo/UserInfo";

export default ({ userId, avatarUrl, nickname, createAt }) => {
  return (
    <ContentInfo>
      <UserInfo
        userId={userId}
        src={avatarUrl}
        name={nickname}
        size="medium"
        color="black"
      />
      <InfoDate>{moment(createAt).fromNow()}</InfoDate>
    </ContentInfo>
  );
};
