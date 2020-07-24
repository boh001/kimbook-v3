import React, { useCallback } from "react";
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
import Modal from "Components/Modal/Modal";
import Loading from "Components/Loading/Loading";
import SignUp from "Components/SignUp/SignUp";
import { useSelector, useDispatch } from "react-redux";
import { modalOpenAction } from "modules/reducers/modal";
import { loginAction } from "modules/reducers/Login";
import { startLoading, finishLoading } from "modules/reducers/loading";
import useComponentWillMount from "hooks/useComponentWillMount";
import useComponentDidMount from "hooks/useComponentDidMount";
export default () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const loading = useSelector((state) => state.loading);

  const isLoading = loading[loginAction.TYPE];
  const isOpenModal = modal[loginAction.TYPE];

  const openModal = useCallback(() => {
    dispatch(modalOpenAction({ type: loginAction.TYPE }));
  }, [dispatch]);
  useComponentWillMount(() =>
    dispatch(startLoading({ type: loginAction.TYPE }))
  );
  useComponentDidMount(() =>
    dispatch(finishLoading({ type: loginAction.TYPE }))
  );
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <LoginFrame>
          <LoginForm>
            <LoginLabel>
              아이디
              <LoginInput
                type={"text"}
                placeholder={"아이디를 입력하세요"}
                name={"ID"}
              />
            </LoginLabel>
            <LoginLabel>
              비밀번호
              <LoginInput
                type={"password"}
                placeholder={"비밀번호를 입력하세요"}
                name={"password"}
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
      )}
      {isOpenModal ? (
        <ModalPortal>
          <Modal type={loginAction.TYPE}>
            <SignUp />
          </Modal>
        </ModalPortal>
      ) : null}
    </>
  );
};
