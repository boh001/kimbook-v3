import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { modalCloseAction } from "modules/reducers/modal";
import { ModalFrame } from "./Modal.style";
export default ({ children, type }) => {
  const frameRef = useRef();
  const dispatch = useDispatch();
  window.onclick = function (e) {
    if (e.target === frameRef.current) {
      dispatch(modalCloseAction({ type }));
    }
  }; // bg 클릭시 모달 닫힘

  return <ModalFrame ref={frameRef}>{children}</ModalFrame>;
};
