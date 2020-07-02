import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const LoadingFrame = styled.div`
  width: 100%;
  height: 100vh;
  ${flexCenter};
`;
export const Loading = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 0.6rem solid ${colors.mainBlack};

  border-top-color: ${colors.mainGreen};
  animation: spin 1s infinite linear;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
