import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { modalCloseAction } from "modules/reducers/modal";
import { ModalFrame } from "./ModalFrame.style";
const Modal = ({ children, type }) => {
  const frameRef = useRef();
  const dispatch = useDispatch();
  window.onclick = function(e) {
    if (e.target === frameRef.current) {
      dispatch(modalCloseAction({ type }));
    }
  }; // bg 클릭시 모달 닫힘

  return <ModalFrame ref={frameRef}>{children}</ModalFrame>;
};
Modal.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
};
export default Modal;
