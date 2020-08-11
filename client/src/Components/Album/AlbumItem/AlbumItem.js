import React, { useState, useCallback } from "react";
import {
  AlbumItemWrap,
  AlbumItemImg,
  AlbumItemVideo,
  AlbumItemType,
  AlbumStateFrame,
  AlbumState,
  AlbumText,
} from "./AlbumItem.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faClone,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

export default ({ files, nComments, nLike, contentId }) => {
  const [state, setState] = useState(false);
  const showState = useCallback(() => {
    setState(true);
  });
  const hideState = useCallback(() => {
    setState(false);
  });
  return (
    <>
      {files[0].contentType.split("/")[0] === "image" ? (
        <AlbumItemWrap
          to={`/detail/${contentId}`}
          onMouseOver={showState}
          onMouseLeave={hideState}
        >
          <AlbumItemImg src={files[0].fileUrl} />
          {files.length > 0 && (
            <AlbumItemType>
              <FontAwesomeIcon icon={faClone} />
            </AlbumItemType>
          )}
          {state && (
            <AlbumStateFrame>
              <AlbumState>
                <FontAwesomeIcon icon={faHeart} />
                <AlbumText>{nLike}</AlbumText>
              </AlbumState>
              <AlbumState>
                <FontAwesomeIcon icon={faComment} />
                <AlbumText>{nComments}</AlbumText>
              </AlbumState>
            </AlbumStateFrame>
          )}
        </AlbumItemWrap>
      ) : (
        <AlbumItemWrap
          to={`/detail/${contentId}`}
          onMouseOver={showState}
          onMouseLeave={hideState}
        >
          <AlbumItemVideo src={files[0].fileUrl} />
          <AlbumItemType>
            <FontAwesomeIcon icon={faVideo} />
          </AlbumItemType>
          {state && (
            <AlbumStateFrame>
              <AlbumState>
                <FontAwesomeIcon icon={faHeart} />
                <AlbumText>{nLike}</AlbumText>
              </AlbumState>
              <AlbumState>
                <FontAwesomeIcon icon={faComment} />
                <AlbumText>{nComments}</AlbumText>
              </AlbumState>
            </AlbumStateFrame>
          )}
        </AlbumItemWrap>
      )}
    </>
  );
};
