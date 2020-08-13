import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const ModalFrame = styled.div`
  ${flexCenter};
  background-color: white;
  border: 1px solid ${colors.mainGrey};
  border-radius: 10px;
  font-size: 30px;
  flex-direction: column;
`;
export const BtnWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.mainGrey};
  border-radius: 0px;
`;
export const DeleteBtn = styled.button`
  width: 100%;
  padding: 1em 3em;
  background-color: transparent;
  font-size: inherit;
  color: red;
`;
export const CancelBtn = styled.button`
  width: 100%;
  padding: 1em 3em;
  background-color: transparent;
  font-size: inherit;
`;
