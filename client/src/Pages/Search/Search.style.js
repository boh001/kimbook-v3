import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const Frame = styled.div`
  ${flexCenter};
  flex-direction: column;
  width: 100%;
  padding: 1em 0px;
  margin-top: 90px;
  font-size: 30px;
  @media screen and (max-width: 700px) {
    width: 100%;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    margin-top: 70px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 50px;
    font-size: 20px;
  }
`;
export const SearchResult = styled.div`
  width: 300px;
  height: 70px;
  border-radius: 10px;
  border: 1px solid ${colors.mainGreen};
  color: ${colors.mainGreen};
  ${flexCenter}
  margin: 1em 0;
  @media screen and (max-width: 700px) {
    width: 100%;
    border-left: none;
    border-right: none;
    border-radius: 0px;
  }
  @media screen and (max-width: 500px) {
    height: 50px;
  }
`;
export const ResultUser = styled.div`
  width: 700px;
  height: 250px;
  background-color: blue;
  padding: 1rem;
  border: 1px solid ${colors.mainGrey};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-space-between;
  margin-bottom: 1em;
  @media screen and (max-width: 700px) {
    width: 100%;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    height: 200px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    height: 160px;
  }
`;
export const UserImg = styled.img.attrs((props) => ({}))`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: yellow;
  @media screen and (max-width: 700px) {
    width: 140px;
    height: 140px;
  }
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;
export const UserInfo = styled.div`
  ${flexCenter}
`;
export const InfoOptions = styled.div`
  padding-left: 1em;
`;
export const InfoOption = styled.span`
  display: block;
`;
export const UserFollow = styled.div``;
