import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const Frame = styled.div`
  ${flexCenter};
  flex-direction: column;
  width: 100%;
  padding: 1em 0px;
  font-size: 30px;
  margin-top: 90px;
  @media screen and (max-width: 1024px) {
    margin-top: 70px;
    font-size: 20px;
  }
  @media screen and (max-width: 764px) {
    margin-top: 50px;
    font-size: 15px;
  }
`;

export const ProfileMenu = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  height: 150px;
  border: 1px solid ${colors.mainGrey};
  border-radius: 10px;
  padding: 0px 1em 0px 300px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    height: 120px;
    padding: 0px 1em 0px 200px;
  }
  @media screen and (max-width: 764px) {
    height: 80px;
    padding: 0px 1em 0px 120px;
  }
  @media screen and (max-width: 500px) {
    padding: 0px 1em 0px 100px;
  }
`;
export const ProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;
export const InfoUser = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1em;
`;
export const InfoUserName = styled.span`
  padding-right: 1em;
`;
export const InfoContent = styled.div`
  display: flex;
`;
export const InfoContentsNum = styled.span`
  &:nth-child(2) {
    padding: 0em 1em;
  }
`;
export const InfoCustomBtn = styled.button`
  font-size: 20px;
  font-weight: bold;
  padding: 0.2em 0.5em;
  background-color: transparent;
  border: 1px solid ${colors.mainGrey};
  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }
  @media screen and (max-width: 764px) {
    font-size: 15px;
  }
`;

export const MenuOptions = styled.div`
  display: flex;
`;
export const Option = styled.div`
  ${flexCenter};
  width: 55px;
  height: 55px;
  border-radius: 10px;
  color: ${colors.mainGreen};
  border: 1px solid ${colors.mainGrey};
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${colors.mainGreen};
    border: none;
  }
  &:nth-child(2) {
    margin: 0px 20px;
  }
  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 764px) {
    width: 35px;
    height: 35px;
  }
`;
export const ProfileImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  position: absolute;
  left: 50px;
  bottom: -100px;

  @media screen and (max-width: 1024px) {
    width: 120px;
    height: 120px;
    bottom: -80px;
    left: 35px;
  }
  @media screen and (max-width: 764px) {
    width: 60px;
    height: 60px;
    bottom: -45px;
    left: 15px;
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
  @media screen and (max-width: 764px) {
    height: 50px;
  }
`;
