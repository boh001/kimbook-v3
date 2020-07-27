import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/root";
import rootSaga from "./sagas/root";
import withReduxEnhancer from "addon-redux/enhancer";

const configureStore = () => {
  const sagaMiddelware = createSagaMiddleware();
  const middleware = [sagaMiddelware];
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware), withReduxEnhancer)
  );

  sagaMiddelware.run(rootSaga);
  return store;
};

export default configureStore;
