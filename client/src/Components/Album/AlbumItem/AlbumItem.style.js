import styled from "styled-components";
import { flexCenter } from "utils/constants/css";
import { Link } from "react-router-dom";

export const AlbumItemWrap = styled(Link)`
  position: relative;
  font-size: 20px;
  cursor: pointer;
  color: white;
  &:hover {
    filter: brightness(50%);
  }
`;

export const AlbumItemImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const AlbumItemVideo = styled.video.attrs((props) => ({
  src: props.src,
  type: props.type,
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const AlbumItemType = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
`;
export const AlbumStateFrame = styled.div`
  position: absolute;
  font-size: 30px;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  ${flexCenter};
`;
export const AlbumState = styled.div`
  ${flexCenter};
  width: 30%;
`;
export const AlbumText = styled.span`
  display: block;
  padding-left: 0.5em;
`;
