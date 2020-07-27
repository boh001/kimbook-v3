import React from "react";
import Header from "Components/Header/Header";
import withReduxDecorator from "utils/story/withReduxDecorator";
import { showSearchAction } from "modules/reducers/Header";
import Layout from "utils/story/Layout";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withKnobs, text } from "@storybook/addon-knobs";
import { modalOpenAction, modalCloseAction } from "modules/reducers/modal";
import { writeAction } from "modules/reducers/Write";
export default {
  title: "Components|Header",
  decorators: [
    withKnobs,
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
  {
    name: "Write Open",
    action: modalOpenAction({ type: writeAction.TYPE }),
  },
  {
    name: "Write Close",
    action: modalCloseAction({ type: writeAction.TYPE }),
  },
];
export const header = () => {
  const avatarUrl = text(
    "avatarUrl",
    "https://images.unsplash.com/photo-1594599304267-88bdc2233be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  );
  const name = text("name", "Sara");
  return <Header src={avatarUrl} name={name} />;
};
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
