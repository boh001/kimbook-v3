import styled from "styled-components";
import { flexCenter } from "utils/constants/css";
import colors from "utils/constants/colors";
import { Link } from "react-router-dom";
import { USERLOGIN } from "utils/api/path";

export const LoginFrame = styled.div`
  margin-top: 120px;
  width: 100%;
  height: 100%;
  ${flexCenter}
  font-size: 30px;
  padding: 40px 0px;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;
export const LoginForm = styled.form.attrs({
  action: USERLOGIN,
  method: "post",
})`
  width: 500px;
  @media screen and (max-width: 600px) {
    width: 300px;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const LoginSubmit = styled.button.attrs({
  type: "submit",
})`
  width: 100%;
  font-size: inherit;
  margin-top: 20px;
  padding: 0.5em 1em;
  border: none;
  background-color: ${colors.mainGreen};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${colors.hoverGreen};
  }
`;
export const LoginLabel = styled.label`
  display: inline-block;
  width: 100%;
  margin-bottom: 40px;
`;
export const FindPassword = styled(Link)`
  color: ${colors.mainGreen};
  margin: 40px 0px 40px 0px;
`;
export const SignBtn = styled.button`
  padding: 0.5em 1em;
  font-size: inherit;
  color: white;
  background-color: ${colors.mainGreen};
  &:hover {
    background-color: ${colors.hoverGreen};
  }
`;
export const LineFrame = styled.div`
  margin-bottom: 40px;
  color: ${colors.mainGrey};
  ${flexCenter}
  width: 100%;
`;
export const Line = styled.div`
  border: 1px solid;
  width: 1%;
  height: 1px;
  background-color: ${colors.mainGrey};
  margin: 0px 10px 0px 15px;
`;
export const LineText = styled.div``;
