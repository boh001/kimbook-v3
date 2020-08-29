import React from "react";
import { CommentFrame, CommentUser, CommentText } from "./ContentComment.style";
export default ({ userId, nickname, text }) => {
  return (
    <CommentFrame>
      <CommentUser to={`/profile/${userId}`}>{nickname}</CommentUser>
      <CommentText>{text}</CommentText>
    </CommentFrame>
  );
};
