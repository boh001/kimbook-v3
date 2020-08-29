import React from "react";
import { Frame, CancelBtn } from "./SelectModal.style";
import { useCloseModal } from "hooks/useModal";
import ModalFrame from "../ModalFrame/ModalFrame";
export default ({ type, children }) => {
  const closeSelectModal = useCloseModal(type);
  return (
    <ModalFrame type={type}>
      <Frame>
        {children}
        <CancelBtn onClick={closeSelectModal}>취소하기</CancelBtn>
      </Frame>
    </ModalFrame>
  );
};
