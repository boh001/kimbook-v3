import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const BtnWrap = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${colors.mainGrey};
  border-radius: 0px;
`;
export const DeleteBtn = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  font-size: inherit;
  color: red;
`;
