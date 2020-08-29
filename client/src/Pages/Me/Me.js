import React from "react";
import InfoHeader from "Components/Header/InfoHeader/InfoHeader";
import Content from "Components/Content/Content";
import { useSelector } from "react-redux";
import { meRequestAction } from "modules/reducers/Me";
import { Frame } from "./Me.style";
import DataLoader from "Components/DataLoader/DataLoader";
import ChatRoomBtn from "Components/ChatRoomBtn/ChatRoomBtn";
export default () => {
  const { contents } = useSelector((state) => state.Me);
  return (
    <>
      <InfoHeader />
      <DataLoader action={meRequestAction}>
        <Frame>
          {contents.map((content, key) => {
            return <Content key={key} idx={key} content={content} />;
          })}
        </Frame>
      </DataLoader>
      <ChatRoomBtn />
    </>
  );
};
