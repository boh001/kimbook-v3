import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const WriteFrame = styled.div`
  background-color: white;
  width: 600px;
  border-radius: 10px;
  font-size: 30px;
`;
export const WriteHeader = styled.div`
  width: 100%;
  ${flexCenter};
  border-bottom: 1px solid ${colors.mainGrey};
  padding: 0.5rem 0px;
`;
export const WriteForm = styled.form.attrs({})`
  flex-direction: column;
`;
export const WriteText = styled.input.attrs({
  placeholder: "글 쓰기...",
})`
  width: 99%;
  height: 500px;
  border-radius: none;
  border: none;
  padding-top: 5px;
  &:focus {
    outline: none;
  }
`;
export const WriteSubmit = styled.input.attrs({
  type: "submit",
})`
  background-color: white;
  ${flexCenter};
  color: ${colors.mainGrey};
  width: 100%;
  border-top: 1px solid ${colors.mainGrey};
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding: 0.2rem;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${colors.mainGreen};
  }
`;
export const WriteSub = styled.div``;
