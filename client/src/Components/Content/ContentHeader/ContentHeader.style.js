import styled from "styled-components";
import colors from "utils/constants/colors";

export const ContentInfo = styled.div`
  width: 100%;
  height: 70px;
  padding: 0px 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.mainGrey};
  @media screen and (max-width: 700px) {
    height: 50px;
  }
`;

export const InfoDate = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.mainGrey};
  font-size: 20px;
`;
