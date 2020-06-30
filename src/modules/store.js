import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/root";
import rootSaga from "./sagas/root";

const sagaMiddelware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddelware))
);

sagaMiddelware.run(rootSaga);
export default store;
