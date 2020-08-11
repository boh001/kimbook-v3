import styled, { keyframes } from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";
import { Link } from "react-router-dom";

export const ContentFrame = styled.div`
  width: 760px;
  border: 1px solid ${colors.mainGrey};
  font-size: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    border-radius: 0px;
  }
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

export const ContentInfo = styled.div`
  width: 100%;
  height: 70px;
  padding: 0px 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  @media screen and (max-width: 700px) {
    height: 50px;
  }
`;
export const ContentSlider = styled.div`
  width: 760px;
  height: 500px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 70vw;
  }
`;
export const InfoDate = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.mainGrey};
  font-size: 20px;
`;
export const ContentSub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  border: none;
`;
export const SubOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${colors.mainGreen};
  margin-bottom: 1rem;
  @media screen and (max-width: 700px) {
    margin-bottom: 0.5rem;
  }
`;
export const LOptions = styled.div`
  ${flexCenter}
`;
export const OptionComment = styled(Link)`
  cursor: pointer;
  margin-left: 0.3em;
  ${flexCenter};
`;
const heartbeat = keyframes`
  0% {
    transform: scale(0.75);
  }
  20% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.75);
  }
  60% {
    transform: scale(1);
  }
  80% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(0.75);
  }
`;
export const OptionLike = styled.button`
  background-color: transparent;
  color: inherit;
  font-size: inherit;
  ${flexCenter};
  cursor: pointer;
  animation: ${heartbeat} ${(props) => !props.likeCheck} 1s infinite;
`;
export const OptionSlideBtns = styled.div`
  ${flexCenter};
`;
export const OptionMark = styled.button`
  background-color: transparent;
  color: inherit;
  font-size: inherit;
  ${flexCenter};
  cursor: pointer;
`;
export const SubText = styled.div``;
export const TextLike = styled.span`
  display: inline-block;
  font-weight: bold;
`;
export const TextInfo = styled.div`
  display: flex;
  position: relative;
  margin-top: 1rem;
  @media screen and (max-width: 700px) {
    margin-top: 0.5rem;
  }
`;
export const TextMore = styled.div`
  display: flex;
  color: ${colors.mainGrey};
  cursor: pointer;
  margin-top: 1rem;
  @media screen and (max-width: 700px) {
    margin-top: 0.5rem;
  }
`;
export const InfoValue = styled.p``;
export const ContentForm = styled.form.attrs({})`
  width: 100%;
  height: 10%;
  padding: 0px 1rem;
  border-top: 1px solid ${colors.mainGrey};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContentInput = styled.textarea.attrs({
  type: "text",
  placeholder: "댓글 달기...",
  name: "text",
})`
  width: 100%;
  height: 70px;
  border: none;
  display: flex;
  font-size: inherit;
  align-items: center;
  padding: 1rem 1rem 1rem 0;
  resize: none;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: ${colors.mainGrey};
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
  @media screen and (max-width: 700px) {
    padding: 0.8rem 0px;
    height: 50px;
  }
`;
export const ContentSubmit = styled.input.attrs({
  type: "submit",
  value: "게시",
})`
  background-color: transparent;
  border: none;
  font-size: inherit;
  color: ${colors.mainGreen};
  opacity: 0.5;
  padding: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
export const SubComment = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 0.5em;
`;
export const CommentUser = styled(Link)`
  display: inline-block;
  position: absolute;
  top: 0.5em;
  left: 0;
  color: ${colors.mainGreen};
`;
export const CommentText = styled.p`
  display: inline-block;
  text-indent: ${(props) => `${props.ident * 1.3}px`};
`;
