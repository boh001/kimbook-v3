import React from "react";
import Header from "Components/Header/Header";
import withReduxDecorator from "utils/story/withReduxDecorator";
import { showSearchAction } from "modules/reducers/Header";
import Layout from "utils/story/Layout";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components|Header",
  decorators: [
    (storyFn) => <Layout>{storyFn()}</Layout>,
    (storyFn) => withReduxDecorator({}, cannedActions)(storyFn),
  ],
  component: Header,
};
const cannedActions = [
  {
    name: "SearchBar Controll",
    action: showSearchAction(),
  },
];
export const header = () => <Header />;
header.story = {
  name: "공통 Header",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [
    (storyFn) => {
      var newNode = document.createElement("div");
      newNode.setAttribute("id", "modal");
      const rootNode = document.querySelector("#root");
      rootNode.after(newNode);

      return <div>{storyFn()}</div>;
    },
  ],
};
