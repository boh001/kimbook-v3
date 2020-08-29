import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { DeleteBtn, BtnWrap } from "./HeaderLogoutModal.style";
import { useDispatch } from "react-redux";
import { apiUserLogout } from "utils/api/createPostData";
import {
  HeaderLogoutModalOpenAction,
  HeaderLogoutAction,
} from "modules/reducers/Header";
import SelectModal from "Components/Modal/SelectModal/SelectModal";

export default ({ contentId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = useCallback((e) => {
    apiUserLogout();
    history.push("/");
  });
  return (
    <SelectModal type={HeaderLogoutModalOpenAction.TYPE}>
      <BtnWrap>
        <DeleteBtn onClick={(e) => logout(e)}>로그아웃</DeleteBtn>
      </BtnWrap>
    </SelectModal>
  );
};
