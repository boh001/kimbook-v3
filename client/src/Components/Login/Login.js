import React, { useCallback } from "react";
import {
  LoginFrame,
  LoginForm,
  LoginSubmit,
  FindPassword,
  SignBtn,
  LineFrame,
  Line,
  LineText,
} from "./Login.style";
import ModalPortal from "Components/ModalPortal";
import ModalFrame from "Components/Modal/ModalFrame/ModalFrame";
import Loading from "Components/Loading/Loading";
import SignUp from "Components/SignUp/SignUp";
import { useSelector, useDispatch } from "react-redux";
import { modalOpenAction } from "modules/reducers/modal";
import { loginAction } from "modules/reducers/Login";
import TopLabelInput from "Components/Input/TopLabelInput/TopLabelInput";

export default () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const loading = useSelector((state) => state.loading);

  const isLoading = loading[loginAction.TYPE];
  const isOpenModal = modal[loginAction.TYPE];

  const openModal = useCallback(() => {
    dispatch(modalOpenAction({ type: loginAction.TYPE }));
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <LoginFrame>
          <LoginForm>
            <TopLabelInput
              label="아이디"
              type="text"
              placeholder="아이디를 입력하세요"
              name="ID"
            />
            <TopLabelInput
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력하세요"
              name="password"
            />
            <LoginSubmit>로그인</LoginSubmit>
          </LoginForm>
          <FindPassword to="/find">계정을 잊으셨나요?</FindPassword>
          <LineFrame>
            <Line />
            <LineText>또는</LineText>
            <Line />
          </LineFrame>
          <SignBtn onClick={openModal}>회원가입</SignBtn>
        </LoginFrame>
      )}
      {isOpenModal ? (
        <ModalPortal>
          <ModalFrame type={loginAction.TYPE}>
            <SignUp />
          </ModalFrame>
        </ModalPortal>
      ) : null}
    </>
  );
};
