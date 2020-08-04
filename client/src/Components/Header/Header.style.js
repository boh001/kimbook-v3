import styled from "styled-components";
import colors from "utils/constants/colors";
import { Link } from "react-router-dom";

export const HeaderFrame = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${colors.mainBlack};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.mainGreen};
  font-size: 45px;
  font-weight: bold;
  padding: 0px 1rem;
  @media screen and (max-width: 1024px) {
    height: 70px;
    font-size: 30px;
  }
  @media screen and (max-width: 700px) {
    height: 50px;
    font-size: 20px;
    padding: 0px 0.3rem;
  }
`;
export const HeaderSection = styled.div`
  display: flex;
`;
export const HeaderFlag = styled.span`
  display: flex;
  align-items: center;
  padding-right: 1.5rem;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const HeaderIcon = styled(Link)`
  padding: 0px 1rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding: 0px 0.8rem;
  }
  @media screen and (max-width: 700px) {
    padding: 0px 0.5rem;
  }
`;
