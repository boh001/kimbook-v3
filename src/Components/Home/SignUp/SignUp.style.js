import styled from "styled-components";
import { flexCenter } from "utils/constants/css";
import colors from "utils/constants/colors";

export const SignUpbg = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  ${flexCenter}
`;
export const SignUpFrame = styled.div`
  position: relative;
  height: 1200px;
  width: 1000px;
  ${flexCenter};
  border-radius: 10px;
  border: 1px solid ${colors.mainGrey};
  background-color: white;
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  color: ${colors.mainGrey};
  border: 1px solid ${colors.mainGrey};
  ${flexCenter};
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
  background-color: transparent;
`;
