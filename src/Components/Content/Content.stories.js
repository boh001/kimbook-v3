import React from "react";
import Content from "./Content";
import { withKnobs, text, date, object, number } from "@storybook/addon-knobs";
import Layout from "utils/story/Layout";
import { action } from "@storybook/addon-actions";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components|Content",
  decorators: [
    withKnobs,
    (storyFn) => (
      <Layout>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Content>{storyFn()}</Content>
        </div>
      </Layout>
    ),
  ],
  component: Content,
};
export const content = () => {
  const avatarUrl = text(
    "src",
    "https://images.unsplash.com/photo-1594599304267-88bdc2233be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  );
  const nickname = text("nickname", "Sara");
  const size = text("size", "medium");
  const content = object("content", [
    {
      files:
        "https://images.unsplash.com/photo-1594599304267-88bdc2233be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      text: "High enough to be out of reach of any unwanted paw action...",
    },
  ]);
  const nLike = number("nLike", 3312);
  const createAt = date("date", new Date());
  return (
    <Content
      avatarUrl={avatarUrl}
      nickname={nickname}
      size={size}
      content={content}
      nLike={nLike}
      createAt={createAt}
    />
  );
};
content.story = {
  name: "게시물",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
