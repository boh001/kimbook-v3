import addons from "@storybook/addons";
import withRedux from "addon-redux/withRedux";
import { Provider } from "react-redux";
import configureStore from "modules/store";

const { store, persistor } = configureStore();

const withReduxSetting = {
  Provider,
  store,
};
export default (state = {}, actions = []) =>
  withRedux(addons)(
    (() => {
      withReduxSetting.state = state;
      withReduxSetting.actions = actions;
      return withReduxSetting;
    })()
  );
