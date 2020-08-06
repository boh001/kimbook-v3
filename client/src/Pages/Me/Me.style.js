import styled from "styled-components";
import { flexCenter } from "utils/constants/css";

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 90px;
  padding: 2rem 1rem;
  ${flexCenter};
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    padding: 2rem 0;
    margin-top: 70px;
  }
  @media screen and (max-width: 700px) {
    padding: 2rem 0;
    margin-top: 50px;
  }
`;
