import React, { useCallback } from "react";
import { useHistory } from "react-router";
import {
  ModalFrame,
  DeleteBtn,
  CancelBtn,
  BtnWrap,
} from "./HeaderLogoutModal.style";
import { useDispatch } from "react-redux";
import { modalCloseAction } from "modules/reducers/modal";
import { apiUserLogout } from "utils/api/createPostData";
import {
  HeaderLogoutModalOpenAction,
  HeaderLogoutAction,
} from "modules/reducers/Header";

export default ({ contentId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const modalClose = useCallback(() => {
    dispatch(modalCloseAction({ type: HeaderLogoutModalOpenAction.TYPE }));
  });
  const logout = useCallback((e) => {
    apiUserLogout();
    history.push("/");
  });
  return (
    <ModalFrame>
      <BtnWrap>
        <DeleteBtn onClick={(e) => logout(e)}>로그아웃</DeleteBtn>
      </BtnWrap>
      <CancelBtn onClick={modalClose}>취소하기</CancelBtn>
    </ModalFrame>
  );
};
