import React, { useRef } from "react";
import { CommentFrame, CommentUser, CommentText } from "./ContentComment.style";
export default ({ userId, nickname, text }) => {
  const identRef = useRef();
  return (
    <CommentFrame>
      <CommentUser to={`/profile/${userId}`} ref={identRef}>
        {nickname}
      </CommentUser>
      <CommentText ident={identRef.current?.clientWidth}>{text}</CommentText>
    </CommentFrame>
  );
};
