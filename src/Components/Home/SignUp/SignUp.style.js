import styled from "styled-components";
import { flexCenter } from "utils/constants/css";
import colors from "utils/constants/colors";

export const SignUpForm = styled.form.attrs({
  action: "/user/signUp",
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
  padding: 20px 50px;
  font-size: 25px;
  @media screen and (max-width: 600px) {
    height: 500px;
    width: 100%;
    font-size: 15px;
    padding: 10px 30px;
  }
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  color: ${colors.mainGrey};
  border: 1px solid ${colors.mainGrey};
  ${flexCenter};
  font-size: 15px;
  border-radius: 10px;
  background-color: transparent;
  @media screen and (max-width: 600px) {
    font-size: 10px;
    width: 20px;
    height: 20px;
  }
`;

export const SignUpSubmit = styled.input`
  position: absolute;
  bottom: 20px;
  right: 50px;
  width: 100px;
  height: 50px;
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
  @media screen and (max-width: 600px) {
    width: 70px;
    height: 40px;
    right: 30px;
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
