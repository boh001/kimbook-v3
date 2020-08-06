import styled, { keyframes } from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";
import { Link } from "react-router-dom";

export const Frame = styled.div`
  ${flexCenter};
  flex-direction: column;
  width: 100%;
  padding: 1em 0px;
  margin-top: 90px;
  font-size: 30px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    margin-top: 70px;
    font-size: 20px;
  }
  @media screen and (max-width: 700px) {
    margin-top: 50px;
    font-size: 15px;
  }
`;
export const DetailFrame = styled.div`
  width: 1000px;
  height: 450px;
  background-color: red;
  ${flexCenter};
  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const DetailImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 65%;
  height: 450px;
  object-fit: cover;
  background-color: blue;
  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;
export const DetailSub = styled.div`
  width: 35%;
  height: 100%;
  background-color: green;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
  }
`;
export const DetailName = styled.span`
  display: inline-block;
  margin-top: 5em;
  width: 1000px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-left: 0.5em;
  }
`;
export const DetailLine = styled.div`
  margin: 0.5em 0;
  width: 1000px;
  border: 1px solid ${colors.mainGrey};
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const DetailAlbum = styled.div`
  width: 1000px;
  min-height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    grid-auto-rows: 33vw;
  }
`;
export const AlbumImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  background-color: pink;
`;
