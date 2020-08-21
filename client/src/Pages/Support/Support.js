import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Frame,
  SupportFrame,
  SupportCategory,
  SupportCustom,
  SupportMain,
  SupportSubmit,
} from "./Support.style";
import InfoHeader from "Components/Header/InfoHeader/InfoHeader";
import useComponentDidMount from "hooks/useComponentDidMount";
import { supportRequestAction } from "modules/reducers/Support";
import SupportProfile from "Components/SupportProfile/SupportProfile";
import ChangePwd from "Components/ChangePwd/ChangePwd";

export default () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const {
    user: { _id: userId, avatarUrl, nickname },
  } = useSelector((state) => state.Support);
  useComponentDidMount(() => dispatch(supportRequestAction.request()));

  const showProfileCustom = useCallback(() => {
    setPage(0);
  });
  const showPwdCustom = useCallback(() => {
    setPage(1);
  });
  return (
    <>
      <InfoHeader />
      <Frame>
        <SupportFrame>
          <SupportCategory>
            <SupportCustom onClick={showProfileCustom} page={page === 0}>
              프로필 편집
            </SupportCustom>
            <SupportCustom onClick={showPwdCustom} page={page === 1}>
              비밀번호 변경
            </SupportCustom>
          </SupportCategory>
          <SupportMain>
            {page === 0 ? (
              <SupportProfile>
                <SupportSubmit />
              </SupportProfile>
            ) : (
              page === 1 && (
                <ChangePwd>
                  <SupportSubmit />
                </ChangePwd>
              )
            )}
          </SupportMain>
        </SupportFrame>
      </Frame>
    </>
  );
};
