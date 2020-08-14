import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const Frame = styled.div`
  width: 100%;
  font-size: 30px;
  padding: 140px 1em;
  ${flexCenter};
  @media screen and (max-width: 1024px) {
    padding: 140px 0;
  }
  @media screen and (max-width: 764px) {
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
export const SupportFrame = styled.div`
  display: flex;
  width: 1000px;
  height: 800px;
  border: 1px solid ${colors.mainGrey};
  @media screen and (max-width: 1024px) {
    width: 100%;
    border-left: none;
    border-right: none;
    height: 85vw;
  }
`;
export const SupportCategory = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  border-right: 1px solid ${colors.mainGrey};
`;
export const SupportCustom = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.5em;
  width: 100%;
  height: 10%;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
    border-left: 2px solid ${colors.mainGrey};
  }
`;
export const SupportProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70%;
  height: 100%;
  padding: 2em 4em;
  position: relative;
`;
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
export const SupportForm = styled.form.attrs((props) => ({}))`
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
`;
export const NameInput = styled.input.attrs((props) => ({
  defaultValue: props.pretext,
  type: "text",
}))`
  width: 100%;
  padding: 0.2em 1em;
`;
export const EmailWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1em;
`;
export const EmailLabel = styled.label`
  width: 100%;
  position: relative;
`;
export const EmailInput = styled.input.attrs((props) => ({
  defaultValue: props.pretext,
  type: "email",
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
`;
export const CodeLabel = styled.label`
  width: 100%;
  position: relative;
  padding-top: 1em;
`;
export const CodeInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  width: 100%;
  padding: 0.2em 1em;
`;
export const SupportSubmit = styled.button.attrs((props) => ({
  type: "submit",
}))`
  border: none;
  width: 80px;
  height: 50px;
  font-size: inherit;
  background-color: ${colors.mainGreen};
  color: white;
  position: absolute;
  bottom: 2em;
  right: 4em;
  ${flexCenter};
`;
