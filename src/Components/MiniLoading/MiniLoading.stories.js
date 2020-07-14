import React from "react";
import MiniLoading from "./MiniLoading";
import Layout from "utils/story/Layout";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { CodeBtn } from "Components/Home/SignUp/SignUpInfo/SignUpInfo.style";

export default {
  title: "Components|MiniLoading",
  docorators: [],
  component: MiniLoading,
};
export const minLoading = () => (
  <Layout>
    <div
      style={{
        width: "50%",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginTop: "50%",
      }}
    >
      <CodeBtn>
        <MiniLoading />
      </CodeBtn>
    </div>
  </Layout>
);

minLoading.story = {
  name: "로딩화면",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
