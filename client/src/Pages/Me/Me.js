import React from "react";
import Header from "Components/Header/Header";
import Content from "Components/Content/Content";
import Loading from "Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import useComponentDidMount from "hooks/useComponentDidMount";
import { meRequestAction } from "modules/reducers/Me";
import { Frame } from "./Me.style";

export default () => {
  const dispatch = useDispatch();
  const {
    user: { _id, nickname, avatarUrl, myContents, markContents },
    contents,
  } = useSelector((state) => state.Me);
  const loading = useSelector((state) => state.loading);
  const isLoading = loading[meRequestAction.TYPE];
  useComponentDidMount(() => dispatch(meRequestAction.request()));
  return (
    <>
      <Header userId={_id} src={avatarUrl} name={nickname} />
      {isLoading ? (
        <Loading />
      ) : (
        <Frame>
          {contents.map((content, key) => {
            const {
              authorId: { _id, nickname, avatarUrl },
              files,
              likeUsers,
              text,
              createAt,
              comments,
              _id: contentId,
            } = content;
            return (
              <Content
                key={key}
                idx={key}
                userId={_id}
                contentId={contentId}
                avatarUrl={avatarUrl}
                nickname={nickname}
                content={{ files, text }}
                like={likeUsers.length}
                likeUsers={likeUsers}
                createAt={createAt}
                comments={comments}
                myContents={myContents}
                markContents={markContents}
              />
            );
          })}
        </Frame>
      )}
    </>
  );
};
