import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const HeaderFrame = styled.div`
  width: 100%;
  height: 240px;
  background-color: ${colors.mainBlack};
  ${flexCenter};
  color: ${colors.mainGreen};
  font-size: 45px;
  font-weight: bold;
`;
