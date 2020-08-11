import styled from "styled-components";

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
export const Prev = styled.button`
  position: absolute;
  top: 48%;
  left: 0.5em;
  z-index: 1;
  background-color: transparent;
  color: white;
  font-size: inherit;
`;
export const Next = styled.button`
  position: absolute;
  top: 48%;
  right: 0.5em;
  z-index: 1;
  background-color: transparent;
  color: white;
  font-size: inherit;
`;
export const SliderImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const SliderVideo = styled.video.attrs((props) => ({
  src: props.src,
  type: props.type,
  controls: true,
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
