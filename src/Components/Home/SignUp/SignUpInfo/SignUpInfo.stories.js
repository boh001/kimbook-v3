import React from "react";
import SignUpInfo from "./SignUpInfo";
import { withKnobs, text, boolean, array } from "@storybook/addon-knobs";
import Layout from "utils/story/Layout";
import { action } from "@storybook/addon-actions";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components|Home/SignUp/SignUpInfo",
  decorators: [
    withKnobs,
    (storyFn) => (
      <Layout>
        <div
          style={{
            width: "100%",
            height: "400px",
            padding: "30px",
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {storyFn()}
        </div>
      </Layout>
    ),
  ],
  component: SignUpInfo,
};
export const signupInfo = () => {
  const label = text("label", "아이디");
  const type = text("type", "text");
  const placeholder = text("placeholder", "ID");
  const name = text("name", "ID");
  const show = boolean("show", false);
  const result = boolean("result", false);
  const btn = text("btn", "중복");
  const check = array("check", ["일치합니다", "일치하지않습니다"]);
  return (
    <SignUpInfo
      label={label}
      type={type}
      placeholder={placeholder}
      name={name}
      show={show}
      result={result}
      btn={btn}
      btnEvent={action("btnEvent")}
      check={check}
      inputEvent={action("inputEvent")}
    />
  );
};
signupInfo.story = {
  name: "회원가입 - Input",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
