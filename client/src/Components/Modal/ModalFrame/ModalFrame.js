import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { modalCloseAction } from "modules/reducers/modal";
import { Frame } from "./ModalFrame.style";
import ModalPortal from "Components/ModalPortal";

const Modal = ({ children, type }) => {
  const frameRef = useRef();
  const dispatch = useDispatch();
  window.onclick = function(e) {
    if (e.target === frameRef.current) {
      dispatch(modalCloseAction({ type }));
    }
  }; // bg 클릭시 모달 닫힘

  return (
    <ModalPortal>
      <Frame ref={frameRef}>{children}</Frame>;
    </ModalPortal>
  );
};
Modal.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
};
export default Modal;
