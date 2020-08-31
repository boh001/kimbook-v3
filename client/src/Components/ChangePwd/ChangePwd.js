import React, { useRef, useCallback } from "react";
import { PwdForm, LabelText, PwdLabel, PwdInput } from "./ChangePwd.style";
import { useDispatch } from "react-redux";
import { supportPwdSubmitAction } from "modules/reducers/Support";
export default ({ children }) => {
  const dispatch = useDispatch();
  const pwdSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      const key = form.values();
      const oldPassword = key.next().value;
      const newPassword1 = key.next().value;
      const newPassword2 = key.next().value;
      if (oldPassword === newPassword1) {
        alert("사용할 수 없는 비밀번호입니다");
      } else if (newPassword1 !== newPassword2) {
        alert("일치하지 않는 비밀번호입니다");
      } else {
        dispatch(supportPwdSubmitAction.request({ oldPassword, newPassword1 }));
        window.location.reload();
      }
    },
    [dispatch]
  );
  return (
    <PwdForm onSubmit={(e) => pwdSubmit(e)}>
      <PwdLabel>
        <LabelText>기존 비밀번호</LabelText>
        <PwdInput name="oldPassword" />
      </PwdLabel>
      <PwdLabel>
        <LabelText>새 비밀번호</LabelText>
        <PwdInput name="newPassword1" />
      </PwdLabel>
      <PwdLabel>
        <LabelText>비밀번호 확인</LabelText>
        <PwdInput name="newPassword2" />
      </PwdLabel>
      {children}
    </PwdForm>
  );
};
