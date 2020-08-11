import React from "react";
import { AlbumFrame } from "./Album.style";
import AlbumItem from "./AlbumItem/AlbumItem";

export default ({ albums }) => {
  return (
    <AlbumFrame>
      {albums.map((album, key) => {
        const { files, comments, likeUsers, _id: contentId } = album;
        return (
          <AlbumItem
            key={key}
            files={files}
            nComments={comments.length}
            nLike={likeUsers.length}
            contentId={contentId}
          />
        );
      })}
    </AlbumFrame>
  );
};
