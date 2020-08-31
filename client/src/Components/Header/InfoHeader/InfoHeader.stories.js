import React from "react";
import InfoHeader from "Components/Header/InfoHeader/InfoHeader";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import withReduxDecorator from "utils/story/withReduxDecorator";
import Layout from "utils/story/Layout";

export default {
  title: "Components|Header",
  component: InfoHeader,
};
const cannedActions = [];
export const infoHeader = () => (
  <Layout>
    <InfoHeader />
  </Layout>
);
infoHeader.story = {
  name: "Header with User Info",
  decorators: [(storyFn) => withReduxDecorator({}, cannedActions)(storyFn)],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
