import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as THeart,
  faBookmark as TMark,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as FHeart,
  faBookmark as FMark,
  faComment,
} from "@fortawesome/free-regular-svg-icons";

import { addCommentAction } from "modules/reducers/Me";
import {
  onLikeAction,
  onMarkAction,
  initialCheckAction,
  contentAction,
} from "modules/reducers/Content";
import { modalOpenAction } from "modules/reducers/modal";
import useComponentDidMount from "hooks/useComponentDidMount";
import {
  ContentFrame,
  ContentInfo,
  InfoDate,
  ContentImg,
  ContentVideo,
  ContentSub,
  ContentForm,
  ContentInput,
  SubOptions,
  LOptions,
  OptionComment,
  OptionLike,
  OptionSlideBtns,
  OptionMark,
  SubText,
  CommentUser,
  ContentSubmit,
  TextLike,
  TextMore,
  InfoValue,
  TextInfo,
  SubComment,
  CommentText,
} from "./Content.style";
import ModalPortal from "Components/ModalPortal";
import Modal from "Components/Modal/Modal";
import UserInfo from "Components/UserInfo/UserInfo";

const Content = ({
  idx,
  userId,
  avatarUrl,
  nickname,
  content,
  like,
  createAt,
  comments,
  contentId,
  myContents,
  likeUsers,
  markContents,
}) => {
  const { files, text } = content;
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const isOpenModal = modal[contentAction.TYPE];
  const { likeCheck, markCheck } = useSelector((state) => state.Content);
  const {
    user: { _id: loginUserId },
  } = useSelector((state) => state.Me);
  const commentRef = useRef();
  const identRef = useRef();
  const addComment = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        addCommentAction.request({
          idx,
          text: commentRef.current.value,
          contentId,
        })
      );
      commentRef.current.value = "";
    },
    [dispatch, idx, contentId]
  );
  const onLike = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(onLikeAction.request({ contentId }));
    },
    [dispatch, contentId]
  );
  const onMark = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(onMarkAction.request({ contentId }));
    },
    [dispatch, contentId]
  );

  useComponentDidMount(() =>
    dispatch(
      initialCheckAction({
        likeCheck: likeUsers.includes(loginUserId),
        markCheck: markContents.includes(contentId),
      })
    )
  );
  return (
    <>
      <ContentFrame>
        <ContentInfo>
          <UserInfo
            userId={userId}
            src={avatarUrl}
            name={nickname}
            size="medium"
            color="black"
          />
          <InfoDate>{moment(createAt).fromNow()}</InfoDate>
        </ContentInfo>
        {files.map((file, key) => {
          const { fileUrl, contentType } = file;
          if (contentType.split("/")[0] === "image") {
            return <ContentImg key={key} src={fileUrl} />;
          } else {
            return <ContentVideo key={key} src={fileUrl} />;
          }
        })}

        <ContentSub>
          <SubOptions>
            <LOptions>
              <OptionLike onClick={(e) => onLike(e)} likeCheck={likeCheck}>
                {likeCheck ? (
                  <FontAwesomeIcon icon={THeart} />
                ) : (
                  <FontAwesomeIcon icon={FHeart} />
                )}
              </OptionLike>
              <OptionComment to={`/detail/${contentId}`}>
                <FontAwesomeIcon icon={faComment} />
              </OptionComment>
            </LOptions>
            <OptionSlideBtns></OptionSlideBtns>
            {myContents.includes(contentId) ? (
              <OptionMark>
                <FontAwesomeIcon icon={faEllipsisH} />
              </OptionMark>
            ) : (
              <OptionMark onClick={(e) => onMark(e)}>
                {markCheck ? (
                  <FontAwesomeIcon icon={TMark} />
                ) : (
                  <FontAwesomeIcon icon={FMark} />
                )}
              </OptionMark>
            )}
          </SubOptions>
          <SubText>
            <TextLike>좋아요 {like}개</TextLike>
            <TextInfo>
              <InfoValue>{text}</InfoValue>
            </TextInfo>
            {comments.length > 2 && (
              <TextMore>{`댓글 ${comments.length}개 모두 보기`}</TextMore>
            )}
          </SubText>

          {comments.slice(0, 2).map((comment, key) => {
            const {
              authorId: { nickname },
              text,
            } = comment;
            return (
              <SubComment key={key}>
                <CommentUser to={`/me/profile/${loginUserId}`} ref={identRef}>
                  {nickname}
                </CommentUser>
                <CommentText ident={identRef.current?.clientWidth}>
                  {text}
                </CommentText>
              </SubComment>
            );
          })}
        </ContentSub>
        <ContentForm onSubmit={(e) => addComment(e)}>
          <ContentInput ref={commentRef} />
          <ContentSubmit />
        </ContentForm>
      </ContentFrame>
      {isOpenModal ? (
        <ModalPortal>
          <Modal type={contentAction.TYPE}></Modal>
        </ModalPortal>
      ) : null}
    </>
  );
};
Content.propTypes = {
  idx: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  content: PropTypes.objectOf(PropTypes.array).isRequired,
  like: PropTypes.number.isRequired,
  likeUsers: PropTypes.arrayOf(PropTypes.string),
  createAt: PropTypes.instanceOf(Date).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  contentId: PropTypes.string.isRequired,
  myContents: PropTypes.arrayOf(PropTypes.string),
  markContents: PropTypes.arrayOf(PropTypes.string),
};
Content.defaultProps = {
  nickname: "",
  myContents: [],
  markContents: [],
  likeUsers: [],
};

export default Content;
