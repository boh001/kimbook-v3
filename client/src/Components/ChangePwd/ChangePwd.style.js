import styled from "styled-components";
import { flexCenter } from "utils/constants/css";
import { USERCHANGEPWD } from "utils/api/path";

export const PwdForm = styled.form.attrs((props) => ({
  action: USERCHANGEPWD,
  method: "post",
}))`
  ${flexCenter};
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;
export const LabelText = styled.span`
  display: block;
  padding-bottom: 0.5em;
`;
export const PwdLabel = styled.label`
  width: 100%;
  margin-bottom: 1em;
`;
export const PwdInput = styled.input.attrs((props) => ({
  type: "password",
  name: props.name,
}))`
  width: 100%;
  padding: 0.2em 1em;
`;
