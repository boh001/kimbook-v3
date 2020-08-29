import React, { useCallback } from "react";
import { DeleteBtn, BtnWrap } from "./ContentDeleteModal.style";
import { useDispatch } from "react-redux";
import {
  showDeleteModalAction,
  DeleteContentAction,
} from "modules/reducers/Me";
import SelectModal from "Components/Modal/SelectModal/SelectModal";

export default ({ contentId }) => {
  const dispatch = useDispatch();
  const contentDelete = useCallback(
    (e) => {
      dispatch(DeleteContentAction.request({ contentId }));
      window.location.reload(false);
    },
    [dispatch, contentId]
  );
  return (
    <SelectModal type={showDeleteModalAction.TYPE + contentId}>
      <BtnWrap>
        <DeleteBtn onClick={(e) => contentDelete(e)}>삭제하기</DeleteBtn>
      </BtnWrap>
    </SelectModal>
  );
};
