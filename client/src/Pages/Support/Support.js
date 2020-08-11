import React from "react";
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
import { supportRequestAction } from "modules/reducers/Support";
import { useDispatch, useSelector } from "react-redux";
import df from "images/default.jpeg";

export default () => {
  const dispatch = useDispatch();
  const {
    user: { _id: userId, avatarUrl, nickname, email },
  } = useSelector((state) => state.Support);
  useComponentDidMount(() => dispatch(supportRequestAction.request()));
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
                <LabelText>이름</LabelText>
                <NameInput pretext={nickname} />
              </NameLabel>
              <EmailWrap>
                <EmailLabel>
                  <LabelText>이메일</LabelText>
                  <EmailInput pretext={email} />
                </EmailLabel>
                <EmailSend>이메일 확인</EmailSend>
              </EmailWrap>
              <SupporSubmit />
            </SupportForm>
          </SupportProfile>
        </SupportFrame>
      </Frame>
    </>
  );
};
