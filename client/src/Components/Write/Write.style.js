import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";
import { CONTENTUPLOAD } from "utils/api/path";

export const WriteFrame = styled.div`
  display: flex;
  background-color: white;
  width: 600px;
  border-radius: 10px;
  font-size: 30px;
  overflow: hidden;
  position: relative;
`;
export const WriteWrapper = styled.div`
  display: flex;
  transform: ${(props) => props.slide && "translateX(-600px)"};
  transition: 0.2s linear;
`;
export const WriteSlide = styled.div`
  width: 600px;
  position: relative;
  transition: 0.2s linear;
`;
export const WriteHeader = styled.div`
  width: 100%;
  ${flexCenter};
  border-bottom: 1px solid ${colors.mainGrey};
  padding: 0.5rem 0px;
`;
export const WriteForm = styled.form.attrs({
  action: CONTENTUPLOAD,
  method: "post",
  encType: "multipart/form-data",
})`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
`;
export const WriteText = styled.textarea.attrs({
  name: "writeText",
  placeholder: "글 쓰기...",
})`
  width: 100%;
  min-height: 200px;
  border: none;
  padding-top: 5px;
  margin-bottom: 50px;
  resize: none;
  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${colors.mainGrey};
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;
export const WriteFile = styled.input.attrs({
  type: "file",
  multiple: "multiple",
  name: "uploadFiles[]",
  accept: "image/*,video/*",
  required: true,
})`
  position: absolute;
  width: 1px;
  padding: 15px;
  margin: 0;
  height: 60%;
  opacity: 0;
  cursor: pointer;
`;
export const WriteSubmit = styled.input.attrs({
  type: "submit",
  value: "게시",
})`
  background-color: white;
  ${flexCenter};
  color: ${colors.mainGrey};
  width: 100%;
  border: none;
  border-top: 1px solid ${colors.mainGrey};
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${colors.mainGreen};
  }
`;
export const WriteOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 55px;
  right: 0;
  height: 50px;
  padding: 0px 30px;
`;
export const WriteOption = styled.div`
  ${flexCenter};
  width: 50px;
  height: 100%;
  color: ${colors.mainGreen};
  position: relative;
  cursor: pointer;
`;
export const WriteBack = styled.div`
  position: absolute;
  top: 8px;
  left: 10px;
  cursor: pointer;
`;
export const WriteScroll = styled.div`
  overflow: auto;
  height: 300px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const WriteUploads = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.5em;
  grid-auto-rows: 150px;
`;
export const UploadImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
`;
export const UploadVideo = styled.video.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
`;
