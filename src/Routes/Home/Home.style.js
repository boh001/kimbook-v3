import styled, { keyframes } from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const HeaderFrame = styled.div`
  width: 100%;
  height: 240px;
  background-color: ${colors.mainBlack};
  ${flexCenter};
  color: ${colors.mainGreen};
  font-size: 60px;
  letter-spacing: 30px;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  z-index: 1;
  @media screen and (max-width: 600px) {
    font-size: 30px;
    letter-spacing: 10px;
    height: 120px;
  }
`;
export const BubbleFrame = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const square = keyframes`
  0%   { transform: translateY(0); }
  100% { transform: translateY(-700px) rotate(600deg); }
`;

export const Bubble = styled.li`
  position: absolute;
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  background-color: ${colors.mainGreen};
  bottom: -160px;
  border-radius: 50%;
  animation: ${square} 25s infinite;
  transition-timing-function: linear;

  &:nth-child(1) {
    left: 10%;
  }

  &:nth-child(2) {
    left: 24%;

    width: 80px;
    height: 80px;

    animation-delay: 2s;
    animation-duration: 17s;
    @media screen and (max-width: 600px) {
      width: 40px;
      height: 40px;
    }
  }

  &:nth-child(3) {
    left: 25%;
    animation-delay: 4s;
  }

  &:nth-child(4) {
    left: 40%;
    width: 20px;
    height: 20px;

    animation-duration: 22s;
    @media screen and (max-width: 600px) {
      width: 10px;
      height: 10px;
    }
  }

  &:nth-child(5) {
    left: 70%;
  }

  &:nth-child(6) {
    left: 80%;
    width: 60px;
    height: 60px;

    animation-delay: 3s;
    @media screen and (max-width: 600px) {
      width: 30px;
      height: 30px;
    }
  }

  &:nth-child(7) {
    left: 10%;
    width: 80px;
    height: 80px;

    animation-delay: 7s;
    @media screen and (max-width: 600px) {
      width: 40px;
      height: 40px;
    }
  }

  &:nth-child(8) {
    left: 55%;
    width: 20px;
    height: 20px;

    animation-delay: 15s;
    animation-duration: 40s;
    @media screen and (max-width: 600px) {
      width: 10px;
      height: 10px;
    }
  }

  &:nth-child(9) {
    left: 25%;
    width: 10px;
    height: 10px;

    animation-delay: 2s;
    animation-duration: 40s;
  }

  &:nth-child(10) {
    left: 90%;
    width: 70px;
    height: 70px;

    animation-delay: 11s;
    @media screen and (max-width: 600px) {
      width: 30px;
      height: 30px;
    }
  }
`;
