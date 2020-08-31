import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserWrap,
  UserImg,
  InfoWrap,
  UserName,
  UploadImg,
  SupportForm,
  LabelText,
  NameLabel,
  NameInput,
  EmailWrap,
  EmailLabel,
  EmailInput,
  CheckBtn,
  CodeLabel,
  CodeInput,
  SupportMessage,
  BtnWrap,
  DeleteBtn,
  UploadBtn,
  WriteFile,
} from "./SupportProfile.style";
import {
  supportRequestAction,
  supportemailAction,
  supportcodeAction,
  deleteAvatarAction,
  uploadAvatarAction,
  noNicknameAction,
  nicknameOkayAction,
  supportSubmitAction,
} from "modules/reducers/Support";
import { useOpenModal, useCloseModal } from "hooks/useModal";
import MiniLoading from "Components/MiniLoading/MiniLoading";
import df from "images/default.jpeg";
import SelectModal from "../Modal/SelectModal/SelectModal";

export default ({ children }) => {
  const [imgfile, setImgfile] = useState("");

  const emailRef = useRef();
  const nameRef = useRef();
  const codeRef = useRef();
  const formRef = useRef();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const emailLoading = loading[supportemailAction.TYPE];
  const codeLoading = loading[supportcodeAction.TYPE];

  const {
    user: { avatarUrl, nickname, email },
    codeCheckState,
    emailCheckState,
    nicknameCheckState,
  } = useSelector((state) => state.Support);

  const [isOpenProfileModal, openProfileModal] = useOpenModal(
    supportRequestAction.TYPE
  );
  const closeProfileModal = useCloseModal(supportRequestAction.TYPE);
  const sendEmail = useCallback(
    (e) => {
      e.preventDefault();
      const {
        current: { value: changeEmail },
      } = emailRef;
      const {
        current: { value: name },
      } = nameRef;
      dispatch(supportemailAction.request({ email: changeEmail, name }));
    },
    [dispatch]
  );

  const verifyCode = useCallback(
    (e) => {
      e.preventDefault();
      const { code: origin } = codeCheckState;
      const {
        current: { value: verify },
      } = codeRef;
      dispatch(supportcodeAction.request({ origin, verify }));
    },
    [dispatch, codeCheckState]
  ); // 인증코드 확인
  const readUpload = (inputFile) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (e) => {
        const { result } = e.target;
        resolve(result);
      };
      reader.readAsDataURL(inputFile);
    });
  };
  const deleteAvatar = useCallback(() => {
    dispatch(deleteAvatarAction());
    closeProfileModal(supportRequestAction.TYPE);
  });
  const uploadAvatar = useCallback(async (e) => {
    const {
      target: { files },
    } = e;
    setImgfile(files[0]);
    const uploadfile = await readUpload(files[0]);
    dispatch(uploadAvatarAction({ uploadfile }));
    closeProfileModal(supportRequestAction.TYPE);
  });
  const nicknameBlock = useCallback((e) => {
    if (e.target.value.length === 0) {
      dispatch(noNicknameAction());
    } else {
      dispatch(nicknameOkayAction());
    }
  });
  const submitControl = useCallback((e) => {
    e.preventDefault();
    if (
      codeCheckState.result &&
      emailCheckState.result &&
      nicknameCheckState.result
    ) {
      const form = new FormData(e.target);
      form.append("avatarUrl", imgfile);
      dispatch(supportSubmitAction.request(form));
      window.location.reload();
    } else {
      !nicknameCheckState.result
        ? alert("닉네임을 입력해주세요")
        : !emailCheckState.result
        ? alert("이메일을 전송해주세요")
        : !codeCheckState.result && alert("인증해주세요");
    }
  });
  return (
    <>
      <InfoWrap>
        <UserImg src={avatarUrl ? avatarUrl : df} />
        <UserWrap>
          <UserName>{nickname}</UserName>
          <UploadImg onClick={openProfileModal}>프로필 사진 바꾸기</UploadImg>
        </UserWrap>
      </InfoWrap>
      <SupportForm ref={formRef} onSubmit={(e) => submitControl(e)}>
        <NameLabel>
          <LabelText>닉네임</LabelText>
          <NameInput
            pretext={nickname}
            ref={nameRef}
            onChange={(e) => nicknameBlock(e)}
          />
          <SupportMessage result={nicknameCheckState.result}>
            {nicknameCheckState.message}
          </SupportMessage>
        </NameLabel>
        <EmailWrap>
          <EmailLabel>
            <LabelText>이메일</LabelText>
            <EmailInput pretext={email} ref={emailRef} />
            <CheckBtn onClick={(e) => sendEmail(e)}>
              {emailLoading ? <MiniLoading /> : "전송"}
            </CheckBtn>
            <SupportMessage result={emailCheckState.result}>
              {emailCheckState.message}
            </SupportMessage>
          </EmailLabel>
        </EmailWrap>
        <CodeLabel>
          <LabelText>인증코드</LabelText>
          <CodeInput ref={codeRef} />
          <CheckBtn onClick={(e) => verifyCode(e)}>
            {codeLoading ? <MiniLoading /> : "인증"}
          </CheckBtn>
          <SupportMessage result={codeCheckState.result}>
            {codeCheckState.message}
          </SupportMessage>
        </CodeLabel>
        {children}
      </SupportForm>
      {isOpenProfileModal ? (
        <SelectModal type={supportRequestAction.TYPE}>
          <BtnWrap>
            <UploadBtn>프로필 업로드</UploadBtn>
            <WriteFile onChange={(e) => uploadAvatar(e)} />
          </BtnWrap>
          <BtnWrap>
            <DeleteBtn onClick={deleteAvatar}>현재 사진 삭제</DeleteBtn>
          </BtnWrap>
        </SelectModal>
      ) : null}
    </>
  );
};
