import React from "react";
import Loading from "./Loading";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components|Loading",
  docorators: [],
  component: Loading,
};
export const loading = () => <Loading />;

loading.story = {
  name: "로딩화면",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
