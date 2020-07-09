import styled from "styled-components";
import { flexCenter } from "utils/constants/css";
import colors from "utils/constants/colors";

export const SignUpForm = styled.form.attrs({
  action: "/user/signUp",
  method: "post",
})`
  position: relative;
  height: 900px;
  width: 800px;
  ${flexCenter};
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${colors.mainGrey};
  background-color: white;
  padding: 20px 50px;
  font-size: 30px;
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  color: ${colors.mainGrey};
  border: 1px solid ${colors.mainGrey};
  ${flexCenter};
  font-size: 20px;
  border-radius: 10px;
  background-color: transparent;
`;

export const SignUpSubmit = styled.input`
  position: absolute;
  bottom: 30px;
  right: 50px;
  width: 160px;
  height: 70px;
  border-radius: 10px;
  border: none;
  background-color: ${colors.mainGreen};
  color: white;
  font-size: inherit;
  cursor: pointer;
  &:hover {
    background-color: ${colors.hoverGreen};
  }
`;
export const SignUpError = styled.span`
  position: absolute;
  ${flexCenter};
  bottom: 30px;
  right: 300px;
  font-size: inherit;
  height: 70px;
  color: red;
`;
