import styled from "styled-components";
import { flexCenter } from "utils/constants/css";
import colors from "utils/constants/colors";
import { Link } from "react-router-dom";
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
  action: "/user/login",
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
export const LoginInput = styled.input.attrs((props) => {
  return {
    type: props.type,
    placeholder: props.placeholder,
    value: props.value,
    name: props.name,
  };
})`
  width: 100%;
  height: 80px;
  font-size: inherit;
  margin: 20px 0px;
  @media screen and (max-width: 600px) {
    height: 50px;
  }
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
  &:hover {
    background-color: ${colors.hoverGreen};
  }
  @media screen and (max-width: 600px) {
    height: 50px;
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
  width: 170px;
  height: 80px;
  font-size: inherit;
  color: white;
  background-color: ${colors.mainGreen};
  &:hover {
    background-color: ${colors.hoverGreen};
  }
  @media screen and (max-width: 600px) {
    width: 100px;
    height: 50px;
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
