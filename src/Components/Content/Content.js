import React from "react";
import {
  ContentFrame,
  ContentInfo,
  InfoUser,
  InfoDate,
  ContentImg,
  ContentVideo,
  ContentSub,
  ContentForm,
  ContentInput,
} from "./Content.style";

export default () => {
  return (
    <ContentFrame>
      <ContentInfo></ContentInfo>
      <ContentImg />
      <ContentSub></ContentSub>
      <ContentForm>
        <ContentInput />
      </ContentForm>
    </ContentFrame>
  );
};
