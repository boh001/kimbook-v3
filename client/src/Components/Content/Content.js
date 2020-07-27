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
} from "@fortawesome/free-regular-svg-icons";

import { addCommentAction } from "modules/reducers/Me";
import colors from "utils/constants/colors";
import {
  onLikeAction,
  onMarkAction,
  initialCheckAction,
} from "modules/reducers/Content";
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
  OptionLike,
  OptionSlideBtns,
  OptionMark,
  SubText,
  ContentSubmit,
  TextLike,
  InfoUser,
  InfoValue,
  TextInfo,
  SubComment,
  commentUser,
  CommentText,
} from "./Content.style";
import UserInfo from "Components/UserInfo/UserInfo";

const Content = ({
  idx,
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
  const { likeCheck, markCheck } = useSelector((state) => state.Content);
  const {
    user: { userId },
  } = useSelector((state) => state.Me);
  const commentRef = useRef();
  const relativeTime = moment(createAt).fromNow();
  const addComment = useCallback((e) => {
    e.preventDefault();
    dispatch(
      addCommentAction.request({
        idx,
        text: commentRef.current.value,
        contentId,
      })
    );
  });
  const onLike = useCallback((e) => {
    e.preventDefault();
    dispatch(onLikeAction.request({ contentId }));
  });
  const onMark = useCallback((e) => {
    e.preventDefault();
    dispatch(onMarkAction.request({ contentId }));
  });
  useComponentDidMount(() =>
    dispatch(
      initialCheckAction({
        likeCheck: likeUsers.includes(userId),
        markCheck: markContents.includes(contentId),
      })
    )
  );
  return (
    <ContentFrame>
      <ContentInfo>
        <UserInfo src={avatarUrl} name={nickname} size="medium" color="black" />
        <InfoDate>{relativeTime}</InfoDate>
      </ContentInfo>
      {files.map((file, key) => {
        const { fileUrl, contentType } = file;
        return <ContentImg key={key} src={fileUrl} />;
      })}

      <ContentSub>
        <SubOptions>
          <OptionLike onClick={(e) => onLike(e)} likeCheck={likeCheck}>
            {likeCheck ? (
              <FontAwesomeIcon icon={THeart} />
            ) : (
              <FontAwesomeIcon icon={FHeart} />
            )}
          </OptionLike>
          <OptionSlideBtns></OptionSlideBtns>
          {!myContents.includes(contentId) ? (
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
            <InfoUser>{nickname}</InfoUser>
            <InfoValue ident={nickname.length}>{text}</InfoValue>
          </TextInfo>
        </SubText>

        {comments.map((comment, key) => {
          console.log(comment);
          const {
            authorId: { nickname, avatarUrl },
            text,
            createAt,
          } = comment;
          return (
            <SubComment key={key}>
              <UserInfo
                src={avatarUrl}
                name={nickname}
                size="small"
                color={colors.mainGreen}
              />
              <CommentText>{text}</CommentText>
            </SubComment>
          );
        })}
      </ContentSub>
      <ContentForm onSubmit={(e) => addComment(e)}>
        <ContentInput ref={commentRef} />
        <ContentSubmit />
      </ContentForm>
    </ContentFrame>
  );
};
Content.propTypes = {
  idx: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  content: PropTypes.objectOf(PropTypes.object).isRequired,
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
