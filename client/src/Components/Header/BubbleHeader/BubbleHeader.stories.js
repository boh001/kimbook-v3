import React from "react";
import BubbleHeader from "Components/Header/BubbleHeader/BubbleHeader";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import configureStore from "modules/store";
import { PersistGate } from "redux-persist/integration/react";
const { store, persistor } = configureStore();
export default {
  title: "Components|Header",
  decorator: [],
  component: BubbleHeader,
};
export const bubbleHeader = () => (
  <PersistGate loading={null} persistor={persistor}>
    <BubbleHeader />
  </PersistGate>
);
bubbleHeader.story = {
  name: "Header with Bubble",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
