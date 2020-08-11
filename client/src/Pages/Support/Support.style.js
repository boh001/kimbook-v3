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
  @media screen and (max-width: 700px) {
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
  padding-bottom: 3em;
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
  value: props.pretext,
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
  value: props.pretext,
  type: "email",
}))`
  width: 100%;
  padding: 0.2em 1em;
`;
export const EmailSend = styled.button`
  background-color: ${colors.mainGreen};
  color: white;
  border: 1px solid ${colors.mainGreen};
  border-radius: 0px 10px 10px 0px;
  font-size: inherit;
  padding: 0.2em 1em;
  position: absolute;
  bottom: 0px;
  right: 0;
`;
export const SupporSubmit = styled.input.attrs((props) => ({
  type: "submit",
}))`
  border: none;
  background-color: ${colors.mainGreen};
  color: white;
  position: absolute;
  bottom: 2em;
  right: 4em;
  padding: 0.2em 1em;
`;
