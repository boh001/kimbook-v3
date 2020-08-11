import React, { useState, useRef, useCallback, useEffect } from "react";
import { Frame, Prev, Next, SliderImg, SliderVideo } from "./Slider.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

export default ({ files }) => {
  const [filesItem, setFiles] = useState([]);
  useEffect(() => {
    setFiles(files);
  }, [files]);
  const [slide, setSlide] = useState(1);
  const slideLen = filesItem.length;
  const widthRef = useRef();
  let file = filesItem[slide - 1];

  const goPrev = useCallback(() => {
    if (slide == 1) {
      setSlide(slideLen);
    } else {
      setSlide(slide - 1);
    }
  });
  const goNext = useCallback(() => {
    if (slide == slideLen) {
      setSlide(1);
    } else {
      setSlide(slide + 1);
    }
  });

  return (
    <Frame ref={widthRef}>
      <Prev onClick={goPrev}>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </Prev>
      {file?.contentType.split("/")[0] === "image" ? (
        <SliderImg src={file?.fileUrl} />
      ) : (
        <SliderVideo src={file?.fileUrl} />
      )}
      <Next onClick={goNext}>
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </Next>
    </Frame>
  );
};
