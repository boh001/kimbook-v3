import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const Frame = styled.div`
  ${flexCenter};
  flex-direction: column;
  width: 100%;
  padding: 1rem 0px;
  font-size: 30px;
  margin-top: 90px;
  @media screen and (max-width: 1024px) {
    margin-top: 70px;
    font-size: 20px;
  }
  @media screen and (max-width: 700px) {
    margin-top: 50px;
    font-size: 15px;
  }
`;
export const TopBg = styled.div`
  ${flexCenter};
  width: 1000px;
  height: 300px;
  background-color: red;
  margin-bottom: 1em;
  border-radius: 10px;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 100%;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    height: 250px;
  }
  @media screen and (max-width: 700px) {
    height: 160px;
  }
`;
export const ProfileMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  height: 150px;
  background-color: blue;
  border-radius: 10px;
  padding: 0px 1em 0px 300px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    height: 120px;
    padding: 0px 1em 0px 250px;
  }
  @media screen and (max-width: 700px) {
    height: 80px;
    padding: 0px 1em 0px 180px;
  }
`;
export const ProfileInfo = styled.div``;
export const MenuOptions = styled.div`
  display: flex;
`;
export const Option = styled.div`
  ${flexCenter};
  width: 100px;
  height: 70px;
  border-radius: 10px;
  border: 1px solid ${colors.mainGrey};
  &:nth-child(2) {
    margin: 0px 20px;
  }
  @media screen and (max-width: 1024px) {
    width: 90px;
    height: 60px;
  }
  @media screen and (max-width: 700px) {
    width: 50px;
    height: 40px;
  }
`;
export const ProfileImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 175px;
  height: 175px;
  background-color: yellow;
  border-radius: 50%;
  position: absolute;
  left: 50px;
  bottom: -100px;
  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 150px;
    bottom: -80px;
    left: 35px;
  }
  @media screen and (max-width: 700px) {
    width: 125px;
    height: 125px;
    bottom: -70px;
    left: 25px;
  }
`;
export const ProfileLoc = styled.div`
  width: 300px;
  height: 70px;
  border-radius: 10px;
  border: 1px solid ${colors.mainGreen};
  color: ${colors.mainGreen};
  ${flexCenter}
  margin: 1em 0;
  @media screen and (max-width: 1024px) {
    width: 100%;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    height: 70px;
  }
  @media screen and (max-width: 700px) {
    height: 50px;
  }
`;
export const ProfileAlbum = styled.div`
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
