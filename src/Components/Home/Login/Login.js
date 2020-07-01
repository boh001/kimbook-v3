import React, { useCallback, useState } from "react";
import {
  LoginFrame,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginSubmit,
  FindPassword,
  SignBtn,
  LineFrame,
  Line,
  LineText,
} from "./Login.style";
import ModalPortal from "Components/ModalPortal";
import SignUp from "../SignUp/SignUp";
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <>
      <LoginFrame>
        <LoginForm>
          <LoginLabel>
            아이디
            <LoginInput type={"text"} placeholder={"아이디를 입력하세요"} />
          </LoginLabel>
          <LoginLabel>
            비밀번호
            <LoginInput
              type={"password"}
              placeholder={"비밀번호를 입력하세요"}
            />
          </LoginLabel>
          <LoginSubmit type={"submit"} value={"로그인"} />
        </LoginForm>
        <FindPassword to="#">계정을 잊으셨나요?</FindPassword>
        <LineFrame>
          <Line />
          <LineText>또는</LineText>
          <Line />
        </LineFrame>
        <SignBtn onClick={openModal}>회원가입</SignBtn>
      </LoginFrame>
      {isOpen ? (
        <>
          <ModalPortal>
            <SignUp onClose={openModal} />
          </ModalPortal>
        </>
      ) : null}
    </>
  );
};
