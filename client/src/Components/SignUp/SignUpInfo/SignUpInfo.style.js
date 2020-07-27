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
  width: 75%;
  height: 100%;
  font-size: inherit;
  margin-left: 20px;
  padding-right: 350px;
  @media screen and (max-width: 600px) {
    font-size: 15px;
    padding-right: 120px;
  }
`;
export const SignUpInputLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  margin-bottom: 40px;
  font-size: 25px;
  position: relative;
  @media screen and (max-width: 600px) {
    height: 40px;
    font-size: 15px;
    margin-bottom: 20px;
  }
`;
export const LabelText = styled.span`
  display: inline-block;
  line-height: 30px;
  width: 25%;
  @media screen and (max-width: 600px) {
    line-height: 15px;
  }
`;
export const CodeBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 50px;
  background-color: ${colors.mainGreen};
  color: white;
  font-size: inherit;
  cursor: pointer;
  &:hover {
    background-color: ${colors.hoverGreen};
  }
  @media screen and (max-width: 600px) {
    width: 40px;
    height: 30px;
    top: 5px;
    right: 5px;
  }
`;

export const CheckText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding-left:40%;
  width: 100%;
  height: 100%;
  ${flexCenter}
  color: ${(props) => (props.check ? `${colors.mainGreen}` : "red")};
  @media screen and (max-width: 600px) {
font-size:10px;
  }
  
`;
