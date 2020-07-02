import React, { useRef, useCallback } from "react";
import {
  SignUpForm,
  SignUpbg,
  CloseBtn,
  SignUpInput,
  SignUpLabel,
  LabelText,
  SignUpSubmit,
  CodeBtn,
} from "./SignUp.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { apiEmail } from "utils/api";
export default ({ onClose }) => {
  const bgRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();

  window.onclick = function (e) {
    if (e.target === bgRef.current) {
      onClose();
    }
  };

  const sendEmail = useCallback(async (e) => {
    e.preventDefault();
    const {
      current: { value: email },
    } = emailRef;
    const {
      current: { value: name },
    } = nameRef;
    const {
      data: { result, code },
    } = await apiEmail(email, name);
    console.log(result, code);
  });
  return (
    <SignUpbg ref={bgRef}>
      <SignUpForm>
        <SignUpLabel>
          <LabelText>이름</LabelText>
          <SignUpInput ref={nameRef} type={"text"} placeholder={"Full Name"} />
        </SignUpLabel>
        <SignUpLabel>
          <LabelText>아이디</LabelText>
          <SignUpInput type={"text"} placeholder={"ID"} />
        </SignUpLabel>
        <SignUpLabel>
          <LabelText>비밀번호</LabelText>
          <SignUpInput type={"password"} placeholder={"Password"} />
        </SignUpLabel>
        <SignUpLabel>
          <LabelText>
            비밀번호
            <br />
            재확인
          </LabelText>
          <SignUpInput type={"text"} placeholder={"Verify Password"} />
        </SignUpLabel>
        <SignUpLabel>
          <LabelText>이메일</LabelText>
          <SignUpInput ref={emailRef} type={"email"} placeholder={"Email"} />
          <CodeBtn onClick={(e) => sendEmail(e)}>전송</CodeBtn>
        </SignUpLabel>
        <SignUpLabel>
          <LabelText>인증번호</LabelText>
          <SignUpInput type={"number"} placeholder={"Verification Code"} />
          <CodeBtn>인증</CodeBtn>
        </SignUpLabel>
        <SignUpSubmit type={"submit"} value={"확인"} />
        <CloseBtn onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseBtn>
      </SignUpForm>
    </SignUpbg>
  );
};
