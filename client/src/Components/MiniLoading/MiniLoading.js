import React from "react";
import { MiniLoading, MiniLoadingFrame } from "./MiniLoading.style";
export default () => {
  return (
    <MiniLoadingFrame>
      <MiniLoading />
      <MiniLoading />
      <MiniLoading />
    </MiniLoadingFrame>
  );
};
