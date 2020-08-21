import React, { useCallback, useState } from "react";
import { CommentFrame, CommentUser, CommentText } from "./ContentComment.style";
export default ({ userId, nickname, text }) => {
  const [ident, setIdent] = useState(0);
  const identCheck = useCallback((node) => {
    if (node !== null) {
      setIdent(node.clientWidth);
    }
  }, []);
  window.onresize = () => {};
  return (
    <CommentFrame>
      <CommentUser to={`/profile/${userId}`} ref={identCheck}>
        {nickname}
      </CommentUser>
      <CommentText ident={ident}>{text}</CommentText>
    </CommentFrame>
  );
};
