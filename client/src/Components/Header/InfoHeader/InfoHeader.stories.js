import React from "react";
import InfoHeader from "Components/Header/InfoHeader/InfoHeader";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import withReduxDecorator from "utils/story/withReduxDecorator";
import configureStore from "modules/store";
import { PersistGate } from "redux-persist/integration/react";
const { store, persistor } = configureStore();

export default {
  title: "Components|Header",
  decorator: [(storyFn) => withReduxDecorator({})(storyFn)],
  component: InfoHeader,
};
export const infoHeader = () => (
  <PersistGate loading={null} persistor={persistor}>
    <InfoHeader />
  </PersistGate>
);
infoHeader.story = {
  name: "Header with User Info",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
