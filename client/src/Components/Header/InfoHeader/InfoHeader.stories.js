import React from "react";
import InfoHeader from "Components/Header/InfoHeader/InfoHeader";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import withReduxDecorator from "utils/story/withReduxDecorator";

export default {
  title: "Components|Header",
  decorator: [(storyFn) => withReduxDecorator({})(storyFn)],
  component: InfoHeader,
};
export const infoHeader = () => <InfoHeader />;
infoHeader.story = {
  name: "Header with User Info",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
