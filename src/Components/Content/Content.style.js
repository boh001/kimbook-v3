import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const ContentFrame = styled.div`
  width: 760px;
  height: 800px;
  background-color: blue;
  border: 1px solid ${colors.mainGrey};
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    border-radius: 0px;
  }
  @media screen and (max-width: 700px) {
    height: 600px;
  }
`;

export const ContentInfo = styled.div`
  width: 100%;
  height: 10%;
  background-color: pink;
  padding: 0px 1rem;
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  @media screen and (max-width: 1024px) {
    border-radius: 0px;
  }
`;
export const InfoUser = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const InfoDate = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  border: none;
`;
export const ContentImg = styled.img.attrs((props) => ({
  src: "test",
}))`
  width: 100%;
  height: 65%;
  border: none;
  object-fit: cover;
`;
export const ContentVideo = styled.video`
  width: 100%;
  border: none;
`;
export const ContentSub = styled.div`
  width: 100%;
  height: 15%;
  background-color: yellow;
  display: flex;
  align-items: center;
  padding: 0px 1rem;
  border: none;
`;
export const ContentForm = styled.form.attrs({})`
  width: 100%;
  height: 10%;
  border: none;
`;
export const ContentInput = styled.input.attrs({})`
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 10px 10px;
  background-color: green;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    border-radius: 0px;
  }
`;
