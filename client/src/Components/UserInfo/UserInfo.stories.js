import React from "react";
import UserInfo from "./UserInfo";
import { withKnobs, text } from "@storybook/addon-knobs";
import Layout from "utils/story/Layout";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components|UserInfo",
  decorators: [withKnobs],
  component: UserInfo,
};
export const userInfo1 = () => {
  const src = text(
    "src",
    "https://images.unsplash.com/photo-1594599304267-88bdc2233be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  );
  const name = text("name", "Sara");
  const size = text("size", "medium");

  const color = text("color", "white");
  return (
    <Layout>
      <div
        style={{
          widht: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <UserInfo src={src} name={name} size={size} color={color} />
      </div>
    </Layout>
  );
};
userInfo1.story = {
  name: "유저이미지 - 유저이름",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
