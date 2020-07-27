import React from "react";
import SignUp from "./SignUp";
import Layout from "utils/story/Layout";
import { ModalFrame } from "Components/Modal/Modal.style";
import withReduxDecorator from "utils/story/withReduxDecorator";
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
  title: "Components|Home/SignUp",
  decorators: [
    (storyFn) => (
      <Layout>
        <ModalFrame>{storyFn()}</ModalFrame>
      </Layout>
    ),
    (storyFn) => withReduxDecorator({}, cannedActions)(storyFn),
  ],
  component: SignUp,
};
export const signup = () => {
  return <SignUp />;
};
const cannedActions = [
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
signup.story = {
  name: "회원가입 - Form",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
