import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";
import { USERCHANGEPROFILE } from "utils/api/path";

export const UserWrap = styled.div`
  padding-left: 1em;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;
export const UserImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  @media screen and (max-width: 764px) {
    width: 60px;
    height: 60px;
  }
  @media screen and (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
`;

export const InfoWrap = styled.div`
  ${flexCenter};
  padding-bottom: 2em;
`;
export const UserName = styled.span``;
export const UploadImg = styled.span`
  display: block;
  color: ${colors.mainGreen};
  cursor: pointer;
`;
export const SupportForm = styled.form.attrs((props) => ({
  action: USERCHANGEPROFILE,
  method: "post",
  encType: "multipart/form-data",
}))`
  ${flexCenter};
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;
export const LabelText = styled.span`
  display: block;
  padding-bottom: 0.5em;
`;
export const NameLabel = styled.label`
  width: 100%;
  position: relative;
`;
export const NameInput = styled.input.attrs((props) => ({
  defaultValue: props.pretext,
  type: "text",
  name: "nickname",
  required: true,
}))`
  width: 100%;
  padding: 0.2em 1em;
`;
export const EmailWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 2.5em;
`;
export const EmailLabel = styled.label`
  width: 100%;
  position: relative;
`;
export const EmailInput = styled.input.attrs((props) => ({
  defaultValue: props.pretext,
  type: "email",
  name: "email",
  required: true,
}))`
  width: 100%;
  padding: 0.2em 1em;
`;
export const CheckBtn = styled.button`
  background-color: ${colors.mainGreen};
  width: 80px;
  height: 50px;
  color: white;
  border-radius: 10px;
  font-size: inherit;
  position: absolute;
  bottom: -4rem;
  right: 0;
  ${flexCenter};
  z-index: 1;
  @media screen and (max-width: 764px) {
    width: 60px;
    height: 35px;
    bottom: -3rem;
  }
  @media screen and (max-width: 500px) {
    width: 40px;
    height: 25px;
    bottom: -2em;
  }
`;
export const CodeLabel = styled.label`
  width: 100%;
  position: relative;
  padding-top: 3em;
`;
export const CodeInput = styled.input.attrs((props) => ({
  type: "text",
  required: true,
}))`
  width: 100%;
  padding: 0.2em 1em;
`;
export const SupportMessage = styled.span`
  position: absolute;
  bottom: -4rem;
  left: 0;
  height: 80px;
  ${flexCenter};
  color: ${(props) => (props.result ? colors.mainGreen : "red")};
`;
export const BtnWrap = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${colors.mainGrey};
  border-radius: 0px;
  position: relative;
`;
export const DeleteBtn = styled.button`
  width: 100%;
  height: 100%;
  color: red;
  background-color: transparent;
  font-size: inherit;
  cursor: pointer;
`;
export const UploadBtn = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  font-size: inherit;
  cursor: pointer;
`;
export const WriteFile = styled.input.attrs({
  type: "file",
  name: "uploadFile",
  accept: "image/*,video/*",
  required: true,
})`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
