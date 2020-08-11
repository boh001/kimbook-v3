import React from "react";
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
import Header from "Components/Header/Header";
import useComponentDidMount from "hooks/useComponentDidMount";
import { profileRequestAction } from "modules/reducers/Profile";
import { useDispatch, useSelector } from "react-redux";
import Loading from "Components/Loading/Loading";
import Album from "Components/Album/Album";
import df from "images/default.jpeg";
import { Link } from "react-router-dom";

export default () => {
  const dispatch = useDispatch();
  const {
    user: { nickname, avatarUrl, myContents, markContents, friends },
  } = useSelector((state) => state.Profile);
  const albums = [].concat(myContents, markContents);
  const loading = useSelector((state) => state.loading);
  const isLoading = loading[profileRequestAction.TYPE];
  let { id: userId } = useParams();
  useComponentDidMount(() =>
    dispatch(profileRequestAction.request({ userId }))
  );
  return (
    <>
      <Header src={avatarUrl} name={nickname} />
      {isLoading ? (
        <Loading />
      ) : (
        <Frame>
          <ProfileMenu>
            <ProfileImg src={avatarUrl ? avatarUrl : df} />
            <ProfileInfo>
              <InfoUser>
                <InfoUserName>{nickname}</InfoUserName>
                <Link to="/me/support">
                  <InfoCustomBtn>프로필 편집</InfoCustomBtn>
                </Link>
              </InfoUser>
              <InfoContent>
                <InfoContentsNum>게시물 {albums.length}</InfoContentsNum>
                <InfoContentsNum>팔로워 {albums.length}</InfoContentsNum>
                <InfoContentsNum>팔로우 {albums.length}</InfoContentsNum>
              </InfoContent>
            </ProfileInfo>
            <MenuOptions>
              <Option>1</Option>
              <Option>2</Option>
            </MenuOptions>
          </ProfileMenu>
          <ProfileLoc>My Album</ProfileLoc>
          <Album albums={albums} />
        </Frame>
      )}
    </>
  );
};
