import React from "react";
import {
  ContentFrame,
  ContentInfo,
  InfoDate,
  ContentImg,
  ContentVideo,
  ContentSub,
  ContentForm,
  ContentInput,
  SubOptions,
  OptionLike,
  OptionSlideBtns,
  OptionStore,
  SubText,
  ContentSubmit,
  TextLike,
  InfoUser,
  InfoValue,
  TextInfo,
} from "./Content.style";
import UserInfo from "../UserInfo/UserInfo";
import moment from "moment";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";

const Content = ({ avatarUrl, name, content, nLike, writeDate }) => {
  const { src, text } = content;
  const relativeTime = moment(writeDate).fromNow();
  return (
    <ContentFrame>
      <ContentInfo>
        <UserInfo src={avatarUrl} name={name} size={"medium"} color={"black"} />
        <InfoDate>{relativeTime}</InfoDate>
      </ContentInfo>
      <ContentImg src={src} />
      <ContentSub>
        <SubOptions>
          <OptionLike>
            <FontAwesomeIcon icon={faHeart} />
          </OptionLike>
          <OptionSlideBtns></OptionSlideBtns>
          <OptionStore>
            <FontAwesomeIcon icon={faBookmark} />
          </OptionStore>
        </SubOptions>
        <SubText>
          <TextLike>좋아요 {nLike}개</TextLike>
          <TextInfo>
            <InfoUser>{name}</InfoUser>
            <InfoValue>{text}</InfoValue>
          </TextInfo>
        </SubText>
      </ContentSub>
      <ContentForm>
        <ContentInput />
        <ContentSubmit />
      </ContentForm>
    </ContentFrame>
  );
};
Content.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.object,
  nLike: PropTypes.number,
  writeDate: PropTypes.instanceOf(Date),
};
Content.defaultProps = {
  avatarUrl:
    "https://images.unsplash.com/photo-1594599304267-88bdc2233be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  name: "Sara",
  content: {
    src:
      "https://images.unsplash.com/photo-1594599304267-88bdc2233be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    text: "High enough to be out of reach of any unwanted paw action...",
  },
  nLike: 3312,
  writeDate: new Date(),
};
export default Content;
