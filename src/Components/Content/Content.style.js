import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const ContentFrame = styled.div`
  width: 760px;
  border: 1px solid ${colors.mainGrey};
  font-size: 30px;
  border-radius: 10px;
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
`;
export const OptionSlideBtns = styled.div`
  ${flexCenter};
`;
export const OptionStore = styled.span`
  ${flexCenter};
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
`;
export const InfoUser = styled.span`
  color: ${colors.mainGreen};
  margin-right: 1rem;
  @media screen and (max-width: 700px) {
    margin-right: 0.5rem;
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
export const ContentInput = styled.input.attrs({
  type: "text",
  placeholder: "댓글 달기...",
})`
  width: 100%;
  height: 100%;
  border: none;
  display: flex;
  font-size: inherit;
  align-items: center;
  padding: 1rem 0px;
  @media screen and (max-width: 700px) {
    padding: 0.5rem 0px;
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
