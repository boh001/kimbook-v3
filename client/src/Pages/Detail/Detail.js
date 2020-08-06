import React from "react";
import {
  Frame,
  DetailFrame,
  DetailImg,
  DetailSub,
  DetailLine,
  DetailName,
  DetailAlbum,
  AlbumImg,
} from "./Detail.style";
import Header from "Components/Header/Header";

export default () => (
  <>
    <Header />
    <Frame>
      <DetailFrame>
        <DetailImg />
        <DetailSub>1</DetailSub>
      </DetailFrame>
      <DetailName>김상현님의 게시물 더 보기</DetailName>
      <DetailLine />
      <DetailAlbum>
        <AlbumImg />
        <AlbumImg />
        <AlbumImg />
        <AlbumImg />
        <AlbumImg />
        <AlbumImg />
        <AlbumImg />
        <AlbumImg />
      </DetailAlbum>
    </Frame>
  </>
);
