import React, { useCallback } from "react";
import { ModalFrame, CancelBtn } from "./SelectModal.style";
import { useDispatch } from "react-redux";
import { modalCloseAction } from "modules/reducers/modal";

export default ({ type, children }) => {
  const dispatch = useDispatch();
  const modalClose = useCallback(() => {
    dispatch(modalCloseAction({ type }));
  });
  return (
    <ModalFrame>
      {children}
      <CancelBtn onClick={modalClose}>취소하기</CancelBtn>
    </ModalFrame>
  );
};
