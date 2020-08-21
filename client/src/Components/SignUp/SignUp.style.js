import styled from "styled-components";
import { flexCenter } from "utils/constants/css";
import colors from "utils/constants/colors";
import { USERSIGNUP } from "utils/api/path";

export const SignUpForm = styled.form.attrs({
  action: USERSIGNUP,
  method: "post",
})`
  position: relative;
  height: 768px;
  width: 700px;
  ${flexCenter};
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${colors.mainGrey};
  background-color: white;
  padding: 2em 2em;
  font-size: 25px;
  @media screen and (max-width: 764px) {
    padding: 2em 4em;
    font-size: 25px;
    height: 110vw;
    width: 100%;
  }
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${colors.mainGrey};
  border: 1px solid ${colors.mainGrey};
  ${flexCenter};
  font-size: 15px;
  border-radius: 10px;
  background-color: transparent;
  padding: 0.5em;
  @media screen and (max-width: 764px) {
    font-size: 10px;
  }
`;

export const SignUpSubmit = styled.button.attrs((props) => ({
  type: "submit",
}))`
  position: absolute;
  bottom: 2em;
  right: 2em;
  padding: 0.5em 1em;
  border-radius: 10px;
  border: none;
  background-color: ${colors.mainGreen};
  color: white;
  font-size: inherit;
  ${flexCenter};
  cursor: pointer;
  &:hover {
    background-color: ${colors.hoverGreen};
  }
  @media screen and (max-width: 764px) {
    bottom: 2em;
    right: 4em;
  }
`;
export const SignUpError = styled.span`
  position: absolute;
  ${flexCenter};
  bottom: 20px;
  right: 50%;
  font-size: inherit;
  height: 50px;
  color: red;
`;
