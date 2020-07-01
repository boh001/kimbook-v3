import React, { useRef } from "react";
import { SignUpFrame, SignUpbg, CloseBtn } from "./SignUp.style";

export default ({ onClose }) => {
  const bgRef = useRef();
  window.onclick = function (e) {
    if (e.target === bgRef.current) {
      onClose();
    }
  };
  return (
    <SignUpbg ref={bgRef}>
      <SignUpFrame>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </SignUpFrame>
    </SignUpbg>
  );
};
