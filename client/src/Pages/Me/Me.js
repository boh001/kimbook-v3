import React from "react";
import InfoHeader from "Components/Header/InfoHeader/InfoHeader";
import Content from "Components/Content/Content";
import Loading from "Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import useComponentDidMount from "hooks/useComponentDidMount";
import { meRequestAction } from "modules/reducers/Me";
import { Frame } from "./Me.style";

export default () => {
  const dispatch = useDispatch();
  const { user: loginUser, contents } = useSelector((state) => state.Me);
  const loading = useSelector((state) => state.loading);
  const isLoading = loading[meRequestAction.TYPE];
  useComponentDidMount(() => {
    dispatch(meRequestAction.request());
  });

  return (
    <>
      <InfoHeader />
      {isLoading ? (
        <Loading />
      ) : (
        <Frame>
          {contents.map((content, key) => {
            return (
              <Content
                key={key}
                idx={key}
                content={content}
                loginUser={loginUser}
              />
            );
          })}
        </Frame>
      )}
    </>
  );
};
