import React, { useEffect, useCallback } from "react";
import {
  Frame,
  DetailFrame,
  DetailSide,
  DetailSub,
  DetailOptions,
  DetailInput,
  DetailLine,
  DetailName,
  OptionsText,
  TextValue,
} from "./Detail.style";
import Header from "Components/Header/Header";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  detailRequestAction,
  onLikeDetailAction,
  onMarkDetailAction,
  addCommenDetailtAction,
} from "modules/reducers/Detail";
import Loading from "Components/Loading/Loading";
import Album from "Components/Album/Album";
import Slider from "Components/Slider/Slider";
import ContentHeader from "Components/Content/ContentHeader/ContentHeader";
import ContentOptions from "Components/Content/ContentOptions/ContentOptions";
import ContentComment from "Components/Content/ContentComment/ContentComment";
import ContentInput from "Components/Content/ContentInput/ContentInput";

export default () => {
  const dispatch = useDispatch();
  const { user: loginUser, content } = useSelector((state) => state.Detail);
  const {
    authorId: { _id: userId, avatarUrl, nickname },
    files,
    text,
    createAt,
    comments,
    likeUsers,
  } = content;
  const loading = useSelector((state) => state.loading);
  const isLoading = loading[detailRequestAction.TYPE];
  let { id: contentId } = useParams();
  useEffect(() => dispatch(detailRequestAction.request({ contentId })), [
    dispatch,
    contentId,
  ]);
  const onLike = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(onLikeDetailAction.request({ contentId }));
    },
    [dispatch, contentId]
  );
  const onMark = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(onMarkDetailAction.request({ contentId }));
    },
    [dispatch, contentId]
  );
  return (
    <>
      <Header
        userId={loginUser._id}
        src={loginUser.avatarUrl}
        name={loginUser.nickname}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <Frame>
          <DetailFrame>
            <Slider files={files} />
            <DetailSide>
              <ContentHeader
                userId={userId}
                avatarUrl={avatarUrl}
                nickname={nickname}
                createAt={createAt}
              />
              <DetailSub>
                {comments.map((comment, key) => {
                  const {
                    authorId: { _id: userId, nickname },
                    text,
                  } = comment;
                  return (
                    <ContentComment
                      key={key}
                      userId={userId}
                      nickname={nickname}
                      text={text}
                    />
                  );
                })}
              </DetailSub>
              <DetailOptions>
                <ContentOptions
                  userId={userId}
                  likeUsers={likeUsers}
                  contentId={contentId}
                  loginUser={loginUser}
                  onLike={onLike}
                  onMark={onMark}
                />
                <OptionsText>
                  <TextValue>{text}</TextValue>
                </OptionsText>
              </DetailOptions>
              <DetailInput>
                <ContentInput contentId={contentId} />
              </DetailInput>
            </DetailSide>
          </DetailFrame>
          <DetailName>{nickname}님의 게시물 더 보기</DetailName>
          <DetailLine />
          <Album albums={loginUser.myContents} />
        </Frame>
      )}
    </>
  );
};
