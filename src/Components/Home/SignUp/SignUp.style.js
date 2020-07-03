import styled from "styled-components";
import { flexCenter } from "utils/constants/css";
import colors from "utils/constants/colors";

export const SignUpbg = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  ${flexCenter}
`;
export const SignUpForm = styled.form`
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

export const SignUpInput = styled.input.attrs((props) => {
  return {
    type: props.type,
    placeholder: props.placeholder,
    value: props.value,
    pattern: props.pattern,
    required: true,
  };
})`
  width: 85%;
  height: 80px;
  font-size: 30px;
  margin-left: 20px;
`;
export const SignUpLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  font-size: inherit;
  position: relative;
`;
export const LabelText = styled.span`
  display: inline-block;
  line-height: 30px;
  width: 15%;
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
`;
export const CodeBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 80px;
  height: 60px;
  background-color: ${colors.mainGreen};
  color: white;
  font-size: 30px;
  cursor: pointer;
`;
export const CheckText = styled.div``;
