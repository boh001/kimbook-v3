import addons from "@storybook/addons";
import withRedux from "addon-redux/withRedux";
import withReduxEnhancer from "addon-redux/enhancer";
import { Provider } from "react-redux";
import rootReducer from "modules/reducers/root";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../sagas/root";

const sagaMiddelware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddelware), withReduxEnhancer)
);

sagaMiddelware.run(rootSaga);
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
