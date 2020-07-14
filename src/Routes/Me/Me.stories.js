import React from "react";
import Me from "Routes/Me";
import withReduxDecorator from "utils/story/withReduxDecorator";
import { showSearchAction } from "modules/reducers/Header";
import Layout from "utils/story/Layout";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Pages|Me",
  decorators: [
    (storyFn) => <Layout>{storyFn()}</Layout>,
    (storyFn) => withReduxDecorator({}, cannedActions)(storyFn),
  ],
  component: Me,
};
const cannedActions = [
  {
    name: "SearchBar Controll",
    action: showSearchAction(),
  },
];
export const me = () => <Me />;
me.story = {
  name: "Me - Redux",
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
