import React, { useState, useCallback } from "react";
import {
  Frame,
  ChatFrame,
  CloseBtn,
  ChatHeader,
  ChatMain,
  ChatRoomLists,
  ChatRoomMain,
  MsgFrame,
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
          <ChatHeader></ChatHeader>
          <ChatMain>
            <ChatRoomLists></ChatRoomLists>
            <ChatRoomMain>
              <MsgFrame></MsgFrame>
            </ChatRoomMain>
          </ChatMain>
        </ChatFrame>
      )}
    </Frame>
  );
};
