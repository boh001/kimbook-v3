import React from "react";
import Home from "./Home";
import withReduxDecorator from "utils/story/withReduxDecorator";
import { modalOpenAction, modalCloseAction } from "modules/reducers/modal";
import Layout from "utils/story/Layout";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import {
  idCheckAction,
  emailCheckAction,
  codeCheckAction,
  pwdCheckAction,
  totalCheckAction,
  resetAction,
} from "modules/reducers/SignUp";

export default {
  title: "Pages|Home",
  decorators: [
    (storyFn) => <Layout>{storyFn()}</Layout>,
    (storyFn) => withReduxDecorator({}, cannedActions)(storyFn),
  ],
  component: Home,
};
const cannedActions = [
  {
    name: "SignUp Open",
    action: modalOpenAction({ type: "LOGIN" }),
  },
  { name: "SignUp Close", action: modalCloseAction({ type: "LOGIN" }) },
  { name: "ID Check", action: idCheckAction.request({ id: "boh001" }) },
  {
    name: "PWD Check",
    action: pwdCheckAction.request({ origin: "123", verify: "12" }),
  },
  {
    name: "Email sending",
    action: emailCheckAction.request({ email: "123@123", name: "KIM" }),
  },
  {
    name: "Verify Code",
    action: codeCheckAction.request({ origin: "123", verify: "12" }),
  },
  { name: "Total Check", action: totalCheckAction() },
  { name: "Reset", action: resetAction() },
];
export const home = () => <Home />;
home.story = {
  name: "홈 - Redux",
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
