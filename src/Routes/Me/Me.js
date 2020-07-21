import React from "react";
import Header from "Components/Header/Header";
import Content from "Components/Content/Content";
import MainFrame from "Components/MainFrame/MainFrame";
import { useDispatch, useSelector } from "react-redux";
import useComponentDidMount from "hooks/useComponentDidMount";
import { meRequestAction } from "modules/reducers/Me";

export default () => {
  const dispatch = useDispatch();
  const {
    user: { nickname, avatarUrl },
    contents,
  } = useSelector((state) => state.Me);
  useComponentDidMount(() => dispatch(meRequestAction.request()));
  return (
    <>
      <Header src={avatarUrl} name={nickname} />
      <MainFrame>
        {contents.map((content, key) => {
          const {
            authorId: { nickname, avatarUrl },
            files,
            like,
            likeUsers,
            text,
            createAt,
          } = content;
          return (
            <Content
              key={key}
              avatarUrl={avatarUrl}
              nickname={nickname}
              content={{ files: files, text: text }}
              like={like}
              createAt={createAt}
            />
          );
        })}
      </MainFrame>
    </>
  );
};
