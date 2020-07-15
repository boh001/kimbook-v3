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
export const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 1rem;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    padding-right: 0.6rem;
  }
  @media screen and (max-width: 700px) {
    padding-right: 0.3rem;
  }
`;
export const HeaderSearchIcon = styled.span`
  padding-right: 1rem;
  position: absolute;
  top: 8px;
  left: ${(props) => (props.show ? "1rem" : "1px")};
  transition: all ease 0.5s;
  @media screen and (max-width: 1024px) {
    top: 8px;
    padding-right: 0.8rem;
    padding-left: 0.3rem;
  }
  @media screen and (max-width: 700px) {
    top: 5px;
    padding-right: 0.5rem;
    left: ${(props) => (props.show ? "1rem" : "5px")};
  }
`;
export const HeaderSearchBar = styled.input.attrs({
  type: "text",
  placeholder: "검색",
})`
  position: relative;
  width: ${(props) => (props.show ? "400px" : "0")};
  height: 60px;
  background-color: white;
  padding-left: ${(props) => (props.show ? "5rem" : "0")};
  transition: all ease 0.5s;
  font-size: inherit;
  opacity: ${(props) => (props.show ? "1" : "0")};
  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.show ? "200px" : "0")};
    padding-left: ${(props) => (props.show ? "4rem" : "0")};
    height: 45px;
  }
  @media screen and (max-width: 700px) {
    width: ${(props) => (props.show ? "140px" : "0")};
    padding-left: ${(props) => (props.show ? "3rem" : "0")};
    height: 30px;
  }
`;
