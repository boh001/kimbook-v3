import React, { useCallback } from "react";
import {
  ModalFrame,
  DeleteBtn,
  CancelBtn,
  BtnWrap,
} from "./ContentDeleteModal.style";
import { useDispatch } from "react-redux";
import { modalCloseAction } from "modules/reducers/modal";
import { showDeleteModalAction } from "modules/reducers/Me";

export default ({ contentId, closeModal }) => {
  const dispatch = useDispatch();
  const modalClose = useCallback(() => {
    closeModal(false);
  });
  const contentDelete = useCallback((e) => {
    dispatch(showDeleteModalAction.request({ contentId }));
    window.location.reload(false);
  });
  return (
    <ModalFrame>
      <BtnWrap>
        <DeleteBtn onClick={(e) => contentDelete(e)}>삭제하기</DeleteBtn>
      </BtnWrap>
      <CancelBtn onClick={modalClose}>취소하기</CancelBtn>
    </ModalFrame>
  );
};
