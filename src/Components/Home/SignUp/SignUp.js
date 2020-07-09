import React, { useRef, useCallback } from "react";
import {
  SignUpForm,
  CloseBtn,
  SignUpSubmit,
  SignUpError,
} from "./SignUp.style";
import SignUpInfo from "./SignUpInfo/SignUpInfo";
import { modalCloseAction } from "modules/reducers/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  idCheckAction,
  emailCheckAction,
  codeCheckAction,
  pwdCheckAction,
  totalCheckAction,
} from "modules/reducers/SignUp";

export default () => {
  const {
    idCheckState,
    emailCheckState,
    codeCheckState,
    pwdCheckState,
    totalCheckState,
  } = useSelector((state) => state.SignUp);
  const dispatch = useDispatch();
  const idRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const pwdRef = useRef();
  const codeRef = useRef();

  const closeModal = useCallback(
    () => dispatch(modalCloseAction({ type: "LOGIN" })),
    [dispatch]
  );
  const idCheck = useCallback(
    (e) => {
      e.preventDefault();
      const {
        current: { value: id },
      } = idRef;
      dispatch(idCheckAction.request({ id }));
    },
    [dispatch]
  ); // 아이디 중복 확인

  const sendEmail = useCallback(
    (e) => {
      e.preventDefault();
      const {
        current: { value: email },
      } = emailRef;
      const {
        current: { value: name },
      } = nameRef;
      dispatch(emailCheckAction.request({ email, name }));
    },
    [dispatch]
  ); // 이메일로 인증코드 전송

  const verifyPwd = useCallback(
    (e) => {
      e.preventDefault();
      const {
        target: { value: origin },
      } = e;
      const {
        current: { value: verify },
      } = pwdRef;
      dispatch(pwdCheckAction.request({ origin, verify }));
    },
    [dispatch]
  ); // 비밀번호 재확인

  const verifyCode = useCallback(
    (e) => {
      e.preventDefault();
      const { code: origin } = codeCheckState;
      const {
        current: { value: verify },
      } = codeRef;
      dispatch(codeCheckAction.request({ origin, verify }));
    },
    [dispatch, codeCheckState]
  ); // 인증코드 확인
  const verifyTotal = useCallback(
    (e) => {
      if (
        !(
          idCheckState.result &&
          emailCheckState.result &&
          codeCheckState.result &&
          pwdCheckState.result
        )
      ) {
        e.preventDefault();
        dispatch(totalCheckAction());
      }
    },
    [
      idCheckState.result,
      emailCheckState.result,
      codeCheckState.result,
      pwdCheckState.result,
      dispatch,
    ]
  );
  return (
    <SignUpForm onSubmit={(e) => verifyTotal(e)}>
      <SignUpInfo
        ref={nameRef}
        label={"닉네임"}
        type={"text"}
        placeholder={"Nickname"}
        name={"nickname"}
      />
      <SignUpInfo
        ref={idRef}
        label={"아이디"}
        type={"text"}
        placeholder={"ID"}
        name={"ID"}
        show={idCheckState.show}
        result={idCheckState.result}
        btn={"중복"}
        btnEvent={idCheck}
        check={["사용가능한 아이디 입니다", "중복된 아이디입니다"]}
      />
      <SignUpInfo
        ref={pwdRef}
        label={"비밀번호"}
        type={"password"}
        name={"password"}
        placeholder={"Password"}
      />
      <SignUpInfo
        label={`비밀번호 재확인`}
        type={"password"}
        placeholder={"Verify Password"}
        show={pwdCheckState.show}
        result={pwdCheckState.result}
        check={["일치합니다", "일치하지않습니다"]}
        inputEvent={verifyPwd}
      />
      <SignUpInfo
        ref={emailRef}
        label={`이메일`}
        type={"email"}
        placeholder={"Email"}
        name={"email"}
        show={emailCheckState.show}
        result={emailCheckState.result}
        btn={"전송"}
        btnEvent={sendEmail}
        check={["전송완료", "전송실패"]}
      />
      <SignUpInfo
        ref={codeRef}
        label={`인증코드`}
        type={"text"}
        placeholder={"Verification Code"}
        show={codeCheckState.show}
        result={codeCheckState.result}
        btn={"인증"}
        btnEvent={verifyCode}
        check={["인증성공", "인증실패"]}
      />
      {totalCheckState.show && (
        <SignUpError>올바르지않은 양식입니다</SignUpError>
      )}
      <SignUpSubmit type={"submit"} value={"확인"} />
      <CloseBtn onClick={closeModal}>
        <FontAwesomeIcon icon={faTimes} />
      </CloseBtn>
    </SignUpForm>
  );
};
