import React, { useState, useCallback } from "react";
import { useParams } from "react-router";
import {
  Frame,
  ProfileMenu,
  ProfileImg,
  ProfileInfo,
  MenuOptions,
  Option,
  ProfileLoc,
  InfoUserName,
  InfoContentsNum,
  InfoCustomBtn,
  InfoUser,
  InfoContent,
} from "./Profile.style";
import InfoHeader from "Components/Header/InfoHeader/InfoHeader";
import {
  profileRequestAction,
  profileStartFollowAction,
} from "modules/reducers/Profile";
import { useDispatch, useSelector } from "react-redux";
import Album from "Components/Album/Album";
import df from "images/default.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import DataLoader from "Components/DataLoader/DataLoader";

export default () => {
  const [page, setPage] = useState(0);
  const showAlbum = useCallback(() => {
    setPage(0);
  });
  const showMark = useCallback(() => {
    setPage(1);
  });
  const dispatch = useDispatch();
  const {
    user: { nickname, avatarUrl, myContents, markContents, follow, follower },
    me,
  } = useSelector((state) => state.Profile);
  let { id: userId } = useParams();
  const startFollow = useCallback(() => {
    dispatch(profileStartFollowAction({ userId }));
  }, [dispatch, userId]);
  return (
    <>
      <InfoHeader />
      <DataLoader action={profileRequestAction} payload={userId}>
        <Frame>
          <ProfileMenu>
            <ProfileImg src={avatarUrl ? avatarUrl : df} />
            <ProfileInfo>
              <InfoUser>
                <InfoUserName>{nickname}</InfoUserName>
                {me ? (
                  <Link to="/me/support">
                    <InfoCustomBtn>프로필 편집</InfoCustomBtn>
                  </Link>
                ) : (
                  <InfoCustomBtn onClick={startFollow}>
                    팔로우 하기
                  </InfoCustomBtn>
                )}
              </InfoUser>
              <InfoContent>
                <InfoContentsNum>게시물 {myContents.length}</InfoContentsNum>
                <InfoContentsNum>팔로워 {follower.length}</InfoContentsNum>
                <InfoContentsNum>팔로우 {follow.length}</InfoContentsNum>
              </InfoContent>
            </ProfileInfo>
            <MenuOptions>
              <Option onClick={showAlbum}>
                <FontAwesomeIcon icon={faTh} />
              </Option>
              <Option onClick={showMark}>
                <FontAwesomeIcon icon={faBookmark} />
              </Option>
            </MenuOptions>
          </ProfileMenu>
          {page === 0 ? (
            <>
              <ProfileLoc>My Album</ProfileLoc>
              <Album albums={myContents} />
            </>
          ) : (
            page === 1 && (
              <>
                <ProfileLoc>My Mark</ProfileLoc>
                <Album albums={markContents} />
              </>
            )
          )}
        </Frame>
      </DataLoader>
    </>
  );
};
