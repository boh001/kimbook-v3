import styled, { keyframes } from "styled-components";
import { flexCenter } from "utils/constants/css";

export const MiniLoadingFrame = styled.div`
  width: 100%;
  height: 100%;
  ${flexCenter};
`;
const loadingA = keyframes`
 0 {
    height: 15px;
  }
  50% {
    height: 35px;
  }
  100% {
    height: 15px;
  }
`;
const loadingB = keyframes`
0 {
   height: 5px;
 }
 50% {
   height: 20px;
 }
 100% {
   height: 5px;
 }
`;
export const MiniLoading = styled.div`
  width: 15%;
  height: 25%;
  background-color: white;
  border: none;
  border-radius: 15px;
  margin-right: 10%;

  &:nth-last-child(1) {
    animation: ${loadingA} 1s 0.75s infinite;
  }
  &:nth-last-child(2) {
    animation: ${loadingA} 1s 0.5s infinite;
  }
  &:nth-last-child(3) {
    animation: ${loadingA} 1s 0s infinite;
  }
  @media screen and (max-width: 600px) {
    &:nth-last-child(1) {
      animation: ${loadingB} 1s 0.75s infinite;
    }
    &:nth-last-child(2) {
      animation: ${loadingB} 1s 0.5s infinite;
    }
    &:nth-last-child(3) {
      animation: ${loadingB} 1s 0s infinite;
    }
  }
`;
