import React, { useCallback, useRef } from "react";
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
  OptionStore,
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
import UserInfo from "../UserInfo/UserInfo";
import moment from "moment";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as THeart,
  faBookmark as TMark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as FHeart,
  faBookmark as FMark,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addCommentAction } from "modules/reducers/Me";
import colors from "utils/constants/colors";
import { onLikeAction } from "modules/reducers/Content";
const Content = ({
  idx,
  avatarUrl,
  nickname,
  content,
  like,
  createAt,
  comments,
  contentId,
}) => {
  const { files, text } = content;
  const dispatch = useDispatch();
  const { likeCheck } = useSelector((state) => state.Content);
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
  return (
    <ContentFrame>
      <ContentInfo>
        <UserInfo
          src={avatarUrl}
          name={nickname}
          size={"medium"}
          color={"black"}
        />
        <InfoDate>{relativeTime}</InfoDate>
      </ContentInfo>
      {files.map((file, key) => {
        const { fileUrl, contentType } = file;
        return <ContentImg key={key} src={fileUrl} />;
      })}

      <ContentSub>
        <SubOptions>
          <OptionLike onClick={(e) => onLike(e)}>
            {likeCheck ? (
              <FontAwesomeIcon icon={THeart} />
            ) : (
              <FontAwesomeIcon icon={FHeart} />
            )}
          </OptionLike>
          <OptionSlideBtns></OptionSlideBtns>
          <OptionStore>
            {likeCheck ? (
              <FontAwesomeIcon icon={TMark} />
            ) : (
              <FontAwesomeIcon icon={FMark} />
            )}
          </OptionStore>
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
                size={"small"}
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
  avatarUrl: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  like: PropTypes.number.isRequired,
  createAt: PropTypes.instanceOf(Date).isRequired,
  comments: PropTypes.array.isRequired,
  contentId: PropTypes.string.isRequired,
};
Content.defaultProps = {
  avatarUrl:
    "https://images.unsplash.com/photo-1594599304267-88bdc2233be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  nickname: "Sara",
  content: [
    {
      files:
        "https://images.unsplash.com/photo-1594599304267-88bdc2233be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      text: "High enough to be out of reach of any unwanted paw action...",
    },
  ],
  like: 3312,
  createAt: new Date(),
  comments: [],
  contentId: "",
};
export default Content;
