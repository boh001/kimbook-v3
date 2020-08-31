import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { showDetailModalAction } from "modules/reducers/Me";
import {
  ContentFrame,
  ContentSub,
  SubText,
  TextMore,
  InfoValue,
  TextInfo,
  ContentSlider,
} from "./Content.style";
import ModalFrame from "Components/Modal/ModalFrame/ModalFrame";
import Slider from "Components/Slider/Slider";
import { onLikeAction, onMarkAction } from "modules/reducers/Me";
import ContentDetail from "./ContentDetailModal/ContentDetailModal";
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentOptions from "./ContentOptions/ContentOptions";
import ContentComment from "./ContentComment/ContentComment";
import ContentInput from "./ContentInput/ContentInput";
import { useOpenModal } from "hooks/useModal";

const Content = React.memo(({ idx, content }) => {
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
  const [isOpenDetailModal, OpenDetailMdoal] = useOpenModal(
    showDetailModalAction.TYPE + contentId
  );
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
      {isOpenDetailModal && (
        <ModalFrame type={showDetailModalAction.TYPE + contentId}>
          <ContentDetail files={files} />
        </ModalFrame>
      )}
    </>
  );
});
Content.propTypes = {
  idx: PropTypes.number.isRequired,
  content: PropTypes.objectOf(PropTypes.string).isRequired,
};
Content.defaultProps = {
  idx: "",
  content: {},
};

export default Content;
