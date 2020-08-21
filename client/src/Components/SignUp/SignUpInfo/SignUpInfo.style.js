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
  padding: 0.5em 1em;
  padding-right: 250px;
  margin-left: 20px;
  @media screen and (max-width: 764px) {
    padding-right: 35vw;
  }
`;
export const SignUpInputLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  position: relative;
  @media screen and (max-width: 764px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
export const LabelText = styled.span`
  display: inline-block;
  line-height: 30px;
  width: 25%;
`;
export const CodeBtn = styled.button`
  position: absolute;
  top: 1px;
  right: 0px;
  width: 80px;
  height: 100%;
  ${flexCenter};
  background-color: ${colors.mainGreen};
  color: white;
  font-size: inherit;
  cursor: pointer;
  &:hover {
    background-color: ${colors.hoverGreen};
  }
  @media screen and (max-width: 764px) {
    width: 60px;
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

  
`;
