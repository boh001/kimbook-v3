import React, { useState, useCallback } from "react";
import BubbleHeader from "Components/Header/BubbleHeader/BubbleHeader";
import {
  Frame,
  FindFrame,
  FindCategory,
  FindOption,
  Form,
  Submit,
} from "./Find.style";
import TopLabelInput from "Components/Input/TopLabelInput/TopLabelInput";
import { USERFINDID, USERFINDPWD } from "utils/api/path";

export default () => {
  const [page, setPage] = useState(0);
  const showFindId = useCallback(() => {
    setPage(0);
  });
  const showFindPwd = useCallback(() => {
    setPage(1);
  });
  return (
    <>
      <BubbleHeader />
      <Frame>
        <FindFrame>
          <FindCategory>
            <FindOption onClick={showFindId}>아이디 찾기</FindOption>
            <FindOption onClick={showFindPwd}>비밀번호 찾기</FindOption>
          </FindCategory>
          {page === 0 ? (
            <Form action={USERFINDID}>
              <TopLabelInput
                label="닉네임"
                type="text"
                placeholder="닉네임을 입력하세요"
                name="nickname"
              />
              <TopLabelInput
                label="이메일"
                type="email"
                placeholder="이메일을 입력하세요"
                name="email"
              />
              <Submit />
            </Form>
          ) : (
            page === 1 && (
              <Form action={USERFINDPWD}>
                <TopLabelInput
                  label="아이디"
                  type="text"
                  placeholder="아이디을 입력하세요"
                  name="id"
                />
                <TopLabelInput
                  label="이메일"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  name="email"
                />
                <Submit />
              </Form>
            )
          )}
        </FindFrame>
      </Frame>
    </>
  );
};
