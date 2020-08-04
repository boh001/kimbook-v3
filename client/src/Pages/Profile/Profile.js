import React from "react";
import {
  Frame,
  TopBg,
  ProfileMenu,
  ProfileImg,
  ProfileInfo,
  MenuOptions,
  Option,
  ProfileLoc,
  ProfileAlbum,
  AlbumImg,
} from "./Profile.style";
import Header from "Components/Header/Header";

export default () => {
  return (
    <>
      <Header />
      <Frame>
        <TopBg>
          <ProfileImg src={""} />
        </TopBg>
        <ProfileMenu>
          <ProfileInfo>hi</ProfileInfo>
          <MenuOptions>
            <Option>1</Option>
            <Option>2</Option>
          </MenuOptions>
        </ProfileMenu>
        <ProfileLoc>My Album</ProfileLoc>
        <ProfileAlbum>
          <AlbumImg />
          <AlbumImg />
          <AlbumImg />
          <AlbumImg />
          <AlbumImg />
          <AlbumImg />
          <AlbumImg />
          <AlbumImg />
        </ProfileAlbum>
      </Frame>
    </>
  );
};
