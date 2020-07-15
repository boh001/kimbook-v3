import React from "react";
import {
  WriteFrame,
  WriteHeader,
  WriteForm,
  WriteText,
  WriteSubmit,
  WriteSub,
} from "./Write.style";

export default () => {
  return (
    <WriteFrame>
      <WriteHeader>내 게시물 만들기</WriteHeader>
      <WriteForm>
        <WriteText />
      </WriteForm>
      <WriteSubmit />
      <WriteSub></WriteSub>
    </WriteFrame>
  );
};
