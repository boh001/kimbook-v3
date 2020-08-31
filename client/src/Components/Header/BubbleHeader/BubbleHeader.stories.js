import React from "react";
import BubbleHeader from "Components/Header/BubbleHeader/BubbleHeader";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components|Header",
  decorator: [],
  component: BubbleHeader,
};
export const bubbleHeader = () => <BubbleHeader />;
bubbleHeader.story = {
  name: "Header with Bubble",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
