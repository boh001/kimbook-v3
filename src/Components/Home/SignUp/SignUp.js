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
import { useSelector, useDispatch } from "react-redux";
import {
  idCheckAction,
  emailCheckAction,
  codeCheckAction,
} from "modules/reducers/SignUp/SignUpCheck";
export default ({ onClose }) => {
  const dispatch = useDispatch();
  const bgRef = useRef();
  const idRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const pwdRef = useRef();

  window.onclick = function (e) {
    if (e.target === bgRef.current) {
      onClose();
    }
  }; // bg 클릭시 모달 닫힘

  const idCheck = useCallback(async (e) => {
    e.preventDefault();
    const {
      current: { value: id },
    } = idRef;
    dispatch(idCheckAction.request({ id }));
  }); // 아이디 중복 확인

  const sendEmail = useCallback(async (e) => {
    e.preventDefault();
    const {
      current: { value: email },
    } = emailRef;
    const {
      current: { value: name },
    } = nameRef;
    dispatch(emailCheckAction.request({ email, name }));
  }); // 이메일로 인증코드 전송

  const verifyPwd = useCallback((e) => {
    const {
      current: { value },
    } = pwdRef;
    if (value === e.target.value) {
      console.log("비밀번호가 일치합니다");
    } else {
      console.log("비밀번호가 일치하지 않습니다");
    }
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
          <SignUpInput ref={idRef} type={"text"} placeholder={"ID"} />
          <CodeBtn onClick={(e) => idCheck(e)}>중복</CodeBtn>
        </SignUpLabel>
        <SignUpLabel>
          <LabelText>비밀번호</LabelText>
          <SignUpInput
            ref={pwdRef}
            type={"password"}
            placeholder={"Password"}
          />
        </SignUpLabel>
        <SignUpLabel>
          <LabelText>
            비밀번호
            <br />
            재확인
          </LabelText>
          <SignUpInput
            onChange={(e) => verifyPwd(e)}
            type={"text"}
            placeholder={"Verify Password"}
          />
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
