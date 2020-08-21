import styled from "styled-components";
import { flexCenter } from "utils/constants/css";
import colors from "utils/constants/colors";

export const Frame = styled.div`
  margin-top: 120px;
  width: 100%;
  height: 100%;
  ${flexCenter}
  font-size: 30px;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;
export const FindFrame = styled.div`
  width: 800px;
  height: 500px;
  border: 1px solid ${colors.mainGrey};
`;
export const FindCategory = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  border-bottom: 1px solid ${colors.mainGrey};
`;
export const FindOption = styled.div`
  ${flexCenter};
  width: 50%;
  height: 100%;
  cursor: pointer;
  &:hover {
    border: 2px solid ${colors.mainGreen};
  }
`;
export const Form = styled.form.attrs((props) => ({
  action: props.action,
  method: "post",
}))`
  ${flexCenter};
  width: 100%;
  height: 85%;
  justify-content: center;
  flex-direction: column;
  padding: 0 5em;
`;

export const Submit = styled.input.attrs({
  type: "submit",
  value: "제출하기",
})`
  font-size: inherit;
  padding: 0.5em 1em;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
