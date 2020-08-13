import styled from "styled-components";
import colors from "utils/constants/colors";

export const ContentForm = styled.form.attrs({})`
  width: 100%;
  padding: 0px 1rem;
  border-top: 1px solid ${colors.mainGrey};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContentInput = styled.textarea.attrs({
  type: "text",
  placeholder: "댓글 달기...",
  name: "text",
})`
  width: 100%;
  height: 70px;
  border: none;
  font-size: inherit;
  padding: 1rem 1rem 1rem 0;
  resize: none;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: ${colors.mainGrey};
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
  @media screen and (max-width: 700px) {
    padding: 0.8rem 0px;
    height: 50px;
  }
  @media screen and (max-width: 500px) {
    padding: 0.7rem 0px;
    height: 40px;
  }
`;
export const ContentSubmit = styled.input.attrs({
  type: "submit",
  value: "게시",
})`
  background-color: transparent;
  border: none;
  font-size: inherit;
  color: ${colors.mainGreen};
  opacity: 0.5;
  padding: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
