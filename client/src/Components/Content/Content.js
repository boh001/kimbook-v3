import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
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
import Modal from "Components/Modal/Modal";
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
  const [deleteModal, setDeleteModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
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
  const OpenDeleteMdoal = useCallback(() => {
    setDeleteModal(true);
  });
  const OpenDetailMdoal = useCallback(() => {
    setDetailModal(true);
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
          <Modal type={showDetailModalAction.TYPE}>
            <ContentDetail files={files} closeModal={setDetailModal} />
          </Modal>
        </ModalPortal>
      )}
      {deleteModal && (
        <ModalPortal>
          <Modal type={showDeleteModalAction.TYPE}>
            <ContentDeleteModal
              contentId={contentId}
              closeModal={setDeleteModal}
            />
          </Modal>
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
