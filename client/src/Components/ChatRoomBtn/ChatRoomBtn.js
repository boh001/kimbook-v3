import React, { useState, useCallback } from "react";
import {
  Frame,
  ChatFrame,
  CloseBtn,
  ChatHeader,
  ChatMain,
  ChatRoomLists,
  ListsHeader,
  ChatRoomMain,
  MsgFrame,
  MsgForm,
  MsgShow,
  MsgInput,
  MsgSubmit,
} from "./ChatRoomBtnstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faTimes } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [active, setActive] = useState(false);
  const onActive = useCallback(() => {
    setActive(!active);
  }, [active]);
  const closeChat = useCallback(() => {
    setActive(false);
  });
  return (
    <Frame onClick={!active && onActive} active={active}>
      {!active ? (
        <FontAwesomeIcon icon={faCommentDots} />
      ) : (
        <ChatFrame>
          <CloseBtn onClick={closeChat}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseBtn>
          <ChatHeader>채팅방</ChatHeader>
          <ChatMain>
            <ChatRoomLists>
              <ListsHeader>목록</ListsHeader>
            </ChatRoomLists>
            <ChatRoomMain>
              <MsgFrame>
                <MsgShow></MsgShow>
              </MsgFrame>
              <MsgForm>
                <MsgInput />
                <MsgSubmit />
              </MsgForm>
            </ChatRoomMain>
          </ChatMain>
        </ChatFrame>
      )}
    </Frame>
  );
};
