import React, { useEffect } from "react";
import {
  Frame,
  DetailFrame,
  DetailSub,
  DetailLine,
  DetailName,
} from "./Detail.style";
import Header from "Components/Header/Header";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { detailRequestAction } from "modules/reducers/Detail";
import Loading from "Components/Loading/Loading";
import Album from "Components/Album/Album";
import Slider from "Components/Slider/Slider";

export default () => {
  const dispatch = useDispatch();
  const {
    user: { nickname, avatarUrl, myContents, friends },
    content,
  } = useSelector((state) => state.Detail);
  const loading = useSelector((state) => state.loading);
  const isLoading = loading[detailRequestAction.TYPE];
  let { id: contentId } = useParams();
  useEffect(() => dispatch(detailRequestAction.request({ contentId })), [
    dispatch,
    contentId,
  ]);
  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <Frame>
          <DetailFrame>
            <Slider files={content.files} />
            <DetailSub>1</DetailSub>
          </DetailFrame>
          <DetailName>{nickname}님의 게시물 더 보기</DetailName>
          <DetailLine />
          <Album albums={myContents} />
        </Frame>
      )}
    </>
  );
};
