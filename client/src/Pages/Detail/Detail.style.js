import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const Frame = styled.div`
  ${flexCenter};
  flex-direction: column;
  width: 100%;
  padding: 1em 0px;
  margin-top: 90px;
  font-size: 20px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    margin-top: 70px;
  }
  @media screen and (max-width: 764px) {
    margin-top: 50px;
    font-size: 15px;
  }
`;
export const DetailFrame = styled.div`
  width: 1000px;
  height: 600px;
  ${flexCenter};
  border: 1px solid ${colors.mainGrey};
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 764px) {
    flex-direction: column;
    height: 110vw;
  }
`;

export const DetailSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  border-left: 1px solid ${colors.mainGrey};
  @media screen and (max-width: 764px) {
    width: 100%;
    height: 30%;
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
export const DetailSub = styled.div`
  width: 100%;
  flex: 1;
  overflow: auto;
  padding: 0.5em;
  border-bottom: 1px solid ${colors.mainGrey};
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 764px) {
    display: none;
  }
`;
export const DetailOptions = styled.div`
  width: 100%;
  padding: 0.5rem 1rem 1rem 1rem;
`;
export const DetailInput = styled.div`
  @media screen and (max-width: 764px) {
    display: none;
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
export const OptionsText = styled.div`
  display: flex;
  position: relative;
  margin-top: 1rem;
  @media screen and (max-width: 700px) {
    margin-top: 0.5rem;
  }
`;
export const TextValue = styled.p``;
