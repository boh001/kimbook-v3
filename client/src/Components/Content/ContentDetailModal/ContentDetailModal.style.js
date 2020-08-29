import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const ModalFrame = styled.div`
  width: 1000px;
  height: 500px;
  background-color: red;
  display: flex;
`;
export const DetailSub = styled.div`
  width: 50%;
  height: 100%;
  background-color: green;
  @media screen and (max-width: 764px) {
    width: 100%;
    height: 30%;
  }
`;
