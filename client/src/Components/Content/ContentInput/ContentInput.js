import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { ContentForm, ContentInput, ContentSubmit } from "./ContentInput.style";
import { addCommentAction } from "modules/reducers/Me";

export default ({ idx, contentId }) => {
  const dispatch = useDispatch();
  const commentRef = useRef();
  const addComment = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        addCommentAction.request({
          idx,
          text: commentRef.current.value,
          contentId,
        })
      );
      commentRef.current.value = "";
    },
    [dispatch, idx, contentId]
  );
  return (
    <ContentForm onSubmit={(e) => addComment(e)}>
      <ContentInput ref={commentRef} />
      <ContentSubmit />
    </ContentForm>
  );
};
