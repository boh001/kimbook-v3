import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const Frame = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 300px;
  grid-auto-rows: 100px;
  background-color: white;
  border: 1px solid ${colors.mainGrey};
  border-radius: 10px;
  font-size: 30px;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    font-size: 25px;
    grid-template-columns: 200px;
    grid-auto-rows: 70px;
  }
  @media screen and (max-width: 764px) {
    font-size: 20px;
    grid-template-columns: 170px;
    grid-auto-rows: 60px;
  }
`;
export const CancelBtn = styled.button`
  width: 100%;
  height: 100%;
  ${flexCenter};
  background-color: transparent;
  font-size: inherit;
`;
