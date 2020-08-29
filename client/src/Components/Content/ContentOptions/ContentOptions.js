import React from "react";
import {
  SubOptions,
  LOptions,
  OptionComment,
  OptionLike,
  OptionSlideBtns,
  OptionMark,
  TextLike,
} from "./ContentOptions.style";
import { showDeleteModalAction } from "modules/reducers/Me";
import ContentDeleteModal from "../ContentDeleteModal/ContentDeleteModal";
import ModalPortal from "Components/ModalPortal";
import ModalFrame from "Components/Modal/ModalFrame/ModalFrame";
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
import { useOpenModal } from "hooks/useModal";
import { useSelector } from "react-redux";

export default ({ userId, likeUsers, contentId, onLike, onMark }) => {
  const { user: loginUser } = useSelector((state) => state.Me);
  const likeCheck = likeUsers?.includes(loginUser._id);
  const markCheck = loginUser?.markContents?.includes(contentId);
  const [isOpenDeleteModal, OpenDeleteMdoal] = useOpenModal(
    showDeleteModalAction.TYPE + contentId
  );

  return (
    <>
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
        {loginUser._id === userId ? (
          <OptionMark onClick={OpenDeleteMdoal}>
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
      <TextLike>좋아요 {likeUsers?.length}개</TextLike>
      {isOpenDeleteModal && <ContentDeleteModal contentId={contentId} />}
    </>
  );
};
