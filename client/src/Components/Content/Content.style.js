import styled from "styled-components";
import colors from "utils/constants/colors";
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

export const ContentSlider = styled.div`
  width: 760px;
  height: 500px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 70vw;
  }
`;
export const ContentSub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  border: none;
`;
export const SubText = styled.div``;
export const TextInfo = styled.div`
  display: flex;
  position: relative;
  margin-top: 1rem;
  @media screen and (max-width: 700px) {
    margin-top: 0.5rem;
  }
`;
export const InfoValue = styled.p``;
export const TextMore = styled.div`
  display: flex;
  color: ${colors.mainGrey};
  cursor: pointer;
  margin-top: 1rem;
  @media screen and (max-width: 700px) {
    margin-top: 0.5rem;
  }
`;
