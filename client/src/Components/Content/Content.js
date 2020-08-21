import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  showDetailModalAction,
  showDeleteModalAction,
} from "modules/reducers/Me";
import {
  ContentFrame,
  ContentSub,
  SubText,
  TextMore,
  InfoValue,
  TextInfo,
  ContentSlider,
} from "./Content.style";
import ModalPortal from "Components/ModalPortal";
import ModalFrame from "Components/Modal/ModalFrame/ModalFrame";
import Slider from "Components/Slider/Slider";
import { onLikeAction, onMarkAction } from "modules/reducers/Me";
import { modalOpenAction } from "modules/reducers/modal";
import ContentDeleteModal from "./ContentDeleteModal.js/ContentDeleteModal";
import ContentDetail from "./ContentDetail/ContentDetail";
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentOptions from "./ContentOptions/ContentOptions";
import ContentComment from "./ContentComment/ContentComment";
import ContentInput from "./ContentInput/ContentInput";

const Content = React.memo(({ idx, content, loginUser }) => {
  const dispatch = useDispatch();
  const {
    authorId: { _id: userId, avatarUrl, nickname },
    files,
    text,
    createAt,
    comments,
    _id: contentId,
    likeUsers,
  } = content;
  const modal = useSelector((state) => state.modal);
  const detailModal = modal[showDetailModalAction.TYPE + contentId];
  const deleteModal = modal[showDeleteModalAction.TYPE + contentId];
  const onLike = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(onLikeAction.request({ idx, contentId }));
    },
    [dispatch, contentId, idx]
  );
  const onMark = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(onMarkAction.request({ contentId }));
    },
    [dispatch, contentId]
  );
  const OpenDetailMdoal = useCallback(() => {
    dispatch(modalOpenAction({ type: showDetailModalAction.TYPE + contentId }));
  });
  return (
    <>
      <ContentFrame>
        <ContentHeader
          userId={userId}
          avatarUrl={avatarUrl}
          nickname={nickname}
          createAt={createAt}
        />
        <ContentSlider>
          <Slider files={files} />
        </ContentSlider>
        <ContentSub>
          <ContentOptions
            userId={userId}
            likeUsers={likeUsers}
            contentId={contentId}
            loginUser={loginUser}
            onLike={onLike}
            onMark={onMark}
          />
          <SubText>
            <TextInfo>
              <InfoValue>{text}</InfoValue>
            </TextInfo>
            {comments.length > 2 && (
              <TextMore
                onClick={OpenDetailMdoal}
              >{`댓글 ${comments.length}개 모두 보기`}</TextMore>
            )}
          </SubText>

          {comments.slice(0, 2).map((comment, key) => {
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
        </ContentSub>
        <ContentInput contentId={contentId} idx={idx} />
      </ContentFrame>
      {detailModal && (
        <ModalPortal>
          <ModalFrame type={showDetailModalAction.TYPE + contentId}>
            <ContentDetail files={files} />
          </ModalFrame>
        </ModalPortal>
      )}
      {deleteModal && (
        <ModalPortal>
          <ModalFrame type={showDeleteModalAction.TYPE + contentId}>
            <ContentDeleteModal contentId={contentId} />
          </ModalFrame>
        </ModalPortal>
      )}
    </>
  );
});
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
