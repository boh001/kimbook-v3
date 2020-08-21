import styled from "styled-components";
import { flexCenter } from "utils/constants/css";

export const ModalFrame = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  ${flexCenter}
  z-index:1;
`;
