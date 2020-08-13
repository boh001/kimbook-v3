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

export default ({
  userId,
  OpenDeleteMdoal,
  likeUsers,
  contentId,
  loginUser,
  onLike,
  onMark,
}) => {
  const likeCheck = likeUsers?.includes(loginUser._id);
  const markCheck = loginUser?.markContents?.includes(contentId);
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
    </>
  );
};
