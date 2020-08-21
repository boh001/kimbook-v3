import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const Frame = styled.div`
  width: 100%;
  font-size: 30px;
  padding: 140px 1em;
  ${flexCenter};
  @media screen and (max-width: 1024px) {
    padding: 140px 0;
  }
  @media screen and (max-width: 764px) {
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
export const SupportFrame = styled.div`
  display: flex;
  width: 1000px;
  height: 800px;
  border: 1px solid ${colors.mainGrey};
  @media screen and (max-width: 1024px) {
    width: 100%;
    border-left: none;
    border-right: none;
  }
  @media screen and (max-width: 764px) {
    height: 600px;
  }
  @media screen and (max-width: 500px) {
    height: 400px;
  }
`;
export const SupportCategory = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  border-right: 1px solid ${colors.mainGrey};
`;
export const SupportCustom = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.5em;
  width: 100%;
  height: 10%;
  cursor: pointer;
  border-left: ${(props) => props.page && `5px solid ${colors.mainGreen}`};
  background-color: ${(props) => props.page && "#fafafa"};
  &:hover {
    background-color: ${(props) => !props.page && "#fafafa"};
    border-left: ${(props) => !props.page && `5px solid ${colors.mainGrey}`};
  }
`;
export const SupportMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70%;
  height: 100%;
  padding: 2em 4em;
  position: relative;
`;
export const SupportSubmit = styled.input.attrs((props) => ({
  type: "submit",
  value: "제출하기",
}))`
  border: none;
  width: 100%;
  font-size: inherit;
  background-color: transparent;
  color: ${colors.mainGreen};
  ${flexCenter};
  margin-top: 2.5em;
  cursor: pointer;
`;
