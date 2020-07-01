import styled from "styled-components";
import { flexCenter } from "utils/constants/css";
import colors from "utils/constants/colors";
import { Link } from "react-router-dom";
export const LoginFrame = styled.div`
  position: absolute;
  margin-top: 240px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${flexCenter}
  font-size: 30px;
  padding: 40px 0px;
  flex-direction: column;
`;
export const LoginForm = styled.form`
  width: 500px;
`;
export const LoginInput = styled.input.attrs((props) => {
  return {
    type: props.type,
    placeholder: props.placeholder,
    value: props.value,
  };
})`
  width: 100%;
  height: 80px;
  font-size: inherit;
  margin: 20px 0px;
`;
export const LoginSubmit = styled.input.attrs((props) => {
  return {
    type: props.type,
    value: props.value,
  };
})`
  width: 100%;
  height: 80px;
  font-size: inherit;
  margin-top: 20px;
  border: none;
  background-color: ${colors.mainGreen};
  color: white;
  cursor: pointer;
`;
export const LoginLabel = styled.label`
  display: inline-block;
  margin-bottom: 40px;
`;
export const FindPassword = styled(Link)`
  color: ${colors.mainGreen};
  margin: 40px 0px 40px 0px;
`;
export const SignUp = styled.button`
  width: 170px;
  height: 80px;
  font-size: inherit;
  color: white;
  background-color: ${colors.mainGreen};
`;
export const LineFrame = styled.div`
  margin-bottom: 40px;
  color: ${colors.mainGrey};
  display: flex;
  align-items: center;
`;
export const Line = styled.div`
  border: 1px solid;
  width: 208px;
  height: 1px;
  background-color: ${colors.mainGrey};
  margin: 0px 10px 0px 15px;
`;
export const LineText = styled.div``;
