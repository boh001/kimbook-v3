import styled from "styled-components";
import { flexCenter } from "utils/constants/css";
import colors from "utils/constants/colors";

export const SignUpInput = styled.input.attrs((props) => {
  return {
    type: props.type,
    placeholder: props.placeholder,
    value: props.value,
    required: true,
  };
})`
  width: 88%;
  height: 80px;
  font-size: 30px;
  margin-left: 20px;
  padding-right: 350px;
`;
export const SignUpInputLabel = styled.label`
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
  width: 12%;
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
  &:hover {
    background-color: ${colors.hoverGreen};
  }
`;

export const CheckText = styled.div`
  position: absolute;
  top: 10px;
  right: 90px;
  width: 240px;
  height: 60px;
  ${flexCenter}
  color: ${(props) => (props.check ? `${colors.mainGreen}` : "red")};
`;
