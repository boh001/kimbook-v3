import styled, { keyframes } from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";
import { Link } from "react-router-dom";

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
export const LOptions = styled.div`
  ${flexCenter}
`;
export const OptionComment = styled(Link)`
  cursor: pointer;
  margin-left: 0.3em;
  ${flexCenter};
`;
const heartbeat = keyframes`
  0% {
    transform: scale(0.75);
  }
  20% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.75);
  }
  60% {
    transform: scale(1);
  }
  80% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(0.75);
  }
`;
export const OptionLike = styled.button`
  background-color: transparent;
  color: inherit;
  font-size: inherit;
  ${flexCenter};
  cursor: pointer;
  animation: ${heartbeat} ${(props) => !props.likeCheck} 1s infinite;
`;
export const OptionSlideBtns = styled.div`
  ${flexCenter};
`;
export const OptionMark = styled.button`
  background-color: transparent;
  color: inherit;
  font-size: inherit;
  ${flexCenter};
  cursor: pointer;
`;
export const TextLike = styled.span`
  display: inline-block;
  font-weight: bold;
`;
