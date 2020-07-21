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

const Content = ({ avatarUrl, nickname, content, like, createAt }) => {
  const { files, text } = content;
  const relativeTime = moment(createAt).fromNow();
  return (
    <ContentFrame>
      <ContentInfo>
        <UserInfo
          src={avatarUrl}
          name={nickname}
          size={"medium"}
          color={"black"}
        />
        <InfoDate>{relativeTime}</InfoDate>
      </ContentInfo>
      {files.map((file, key) => {
        const { fileUrl, contentType } = file;
        return <ContentImg key={key} src={fileUrl} />;
      })}

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
          <TextLike>좋아요 {like}개</TextLike>
          <TextInfo>
            <InfoUser>{nickname}</InfoUser>
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
  nickname: PropTypes.string,
  content: PropTypes.object,
  like: PropTypes.number,
  createAt: PropTypes.instanceOf(Date),
};
Content.defaultProps = {
  avatarUrl:
    "https://images.unsplash.com/photo-1594599304267-88bdc2233be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  nickname: "Sara",
  content: {
    src:
      "https://images.unsplash.com/photo-1594599304267-88bdc2233be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    text: "High enough to be out of reach of any unwanted paw action...",
  },
  like: 3312,
  createAt: new Date(),
};
export default Content;
