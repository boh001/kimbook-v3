import React from "react";
import { ModalFrame, DetailSub } from "./ContentDetail.style";
import Slider from "Components/Slider/Slider";

export default ({ files, closeModal }) => {
  return (
    <ModalFrame>
      <Slider files={files} />
      <DetailSub>1</DetailSub>
    </ModalFrame>
  );
};
