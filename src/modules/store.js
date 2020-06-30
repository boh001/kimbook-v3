import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/root";
import helloSaga from "./sagas/test";

const sagaMiddelware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddelware))
);

sagaMiddelware.run(helloSaga);
export default store;
