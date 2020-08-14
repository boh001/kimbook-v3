import React, { useState, useCallback, useRef } from "react";
import {
  Frame,
  SupportFrame,
  SupportCategory,
  SupportCustom,
  SupportProfile,
  UserImg,
  UserName,
  UploadImg,
  SupportForm,
  NameInput,
  EmailInput,
  EmailSend,
  SupporSubmit,
  UserWrap,
  EmailLabel,
  EmailWrap,
  NameLabel,
  InfoWrap,
  LabelText,
} from "./Support.style";
import Header from "Components/Header/Header";
import useComponentDidMount from "hooks/useComponentDidMount";
import {
  supportRequestAction,
  supportemailAction,
} from "modules/reducers/Support";
import { useDispatch, useSelector } from "react-redux";
import MiniLoading from "Components/MiniLoading/MiniLoading";
import df from "images/default.jpeg";

export default () => {
  const [page, setPage] = useState(0);
  const emailRef = useRef();
  const nameRef = useRef();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const emailLoading = loading[supportemailAction.TYPE];
  const {
    user: { _id: userId, avatarUrl, nickname, email },
  } = useSelector((state) => state.Support);
  useComponentDidMount(() => dispatch(supportRequestAction.request()));
  const sendEmail = useCallback(
    (e) => {
      e.preventDefault();
      const {
        current: { value: changeEmail },
      } = emailRef;
      console.log(changeEmail, email);
      if (changeEmail === email) {
        return;
      }
      const {
        current: { value: name },
      } = nameRef;
      dispatch(supportemailAction.request({ email: changeEmail, name }));
    },
    [dispatch, email]
  );
  return (
    <>
      <Header userId={userId} src={avatarUrl} name={nickname} />
      <Frame>
        <SupportFrame>
          <SupportCategory>
            <SupportCustom>프로필 편집</SupportCustom>
            <SupportCustom>비밀번호 변경</SupportCustom>
          </SupportCategory>
          <SupportProfile>
            <InfoWrap>
              <UserImg src={avatarUrl ? avatarUrl : df} />
              <UserWrap>
                <UserName>{nickname}</UserName>
                <UploadImg>프로필 사진 바꾸기</UploadImg>
              </UserWrap>
            </InfoWrap>
            <SupportForm>
              <NameLabel>
                <LabelText>닉네임</LabelText>
                <NameInput pretext={nickname} ref={nameRef} />
              </NameLabel>
              <EmailWrap>
                <EmailLabel>
                  <LabelText>이메일</LabelText>
                  <EmailInput pretext={email} ref={emailRef}></EmailInput>
                  <EmailSend onClick={(e) => sendEmail(e)}>
                    {emailLoading ? <MiniLoading /> : "전송"}
                  </EmailSend>
                </EmailLabel>
              </EmailWrap>

              <SupporSubmit>제출</SupporSubmit>
            </SupportForm>
          </SupportProfile>
        </SupportFrame>
      </Frame>
    </>
  );
};
