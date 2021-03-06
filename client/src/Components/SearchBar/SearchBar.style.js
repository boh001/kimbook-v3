import styled from "styled-components";
import colors from "utils/constants/colors";

export const SearchFrame = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 1rem;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    margin-right: 0.6rem;
  }
  @media screen and (max-width: 764px) {
    margin-right: 0.3rem;
  }
`;
export const SearchIcon = styled.span`
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
  @media screen and (max-width: 764px) {
    top: 5px;
    padding-right: 0.5rem;
    left: ${(props) => (props.show ? "1rem" : "5px")};
  }
`;
export const SearchBar = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "검색",
  name: "result",
  autoComplete: "off",
}))`
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
  @media screen and (max-width: 764px) {
    width: ${(props) => (props.show ? "140px" : "0")};
    padding-left: ${(props) => (props.show ? "3rem" : "0")};
    height: 30px;
  }
`;
export const SearchReults = styled.ul`
  position: absolute;
  left: 0;
  top: 65px;
  width: 100%;
  background-color: white;
  border: 1px solid ${colors.mainGrey};
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    top: 50px;
  }
  @media screen and (max-width: 764px) {
    top: 35px;
  }
`;
export const SearchResult = styled.li`
  width: 100%;
  padding: 0.25em;
  border-radius: 10px;
  &:hover {
    background-color: #dcdde1;
  }
`;
