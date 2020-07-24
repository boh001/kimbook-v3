import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";
import { COMMENTUPLOAD } from "utils/api/path";

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
export const InfoDate = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.mainGrey};
  font-size: 20px;
`;
export const ContentImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 600px;
  border: none;
  object-fit: cover;
  @media screen and (max-width: 1024px) {
    height: 500px;
  }
  @media screen and (max-width: 700px) {
    height: 400px;
  }
`;
export const ContentVideo = styled.video`
  width: 100%;
  height: 600px;
  border: none;
  object-fit: cover;
  @media screen and (max-width: 1024px) {
    height: 500px;
  }
  @media screen and (max-width: 700px) {
    height: 400px;
  }
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
export const OptionLike = styled.span`
  ${flexCenter};
  cursor: pointer;
`;
export const OptionSlideBtns = styled.div`
  ${flexCenter};
`;
export const OptionStore = styled.span`
  ${flexCenter};
  cursor: pointer;
`;
export const SubText = styled.div``;
export const TextLike = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  @media screen and (max-width: 700px) {
    margin-bottom: 0.5rem;
  }
`;
export const TextInfo = styled.div`
  display: flex;
  position: relative;
`;
export const InfoUser = styled.span`
  color: ${colors.mainGreen};
  position: absolute;
  top: 0;
  left: 0;
  margin-right: 1rem;
  @media screen and (max-width: 700px) {
    margin-right: 0.5rem;
  }
`;
export const InfoValue = styled.p`
  text-indent: ${(props) => `${props.ident * 0.7}em`};
`;
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
export const SubComment = styled.div``;
export const commentUser = styled.span``;
export const CommentText = styled.p``;
