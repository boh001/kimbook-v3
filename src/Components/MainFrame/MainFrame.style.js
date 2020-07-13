import styled from "styled-components";
import { flexCenter } from "utils/constants/css";

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  ${flexCenter};
  @media screen and (max-width: 1024px) {
    padding: 2rem 0;
  }
  @media screen and (max-width: 700px) {
    padding: 2rem 0;
  }
`;
