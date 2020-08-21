import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/root";
import rootSaga from "./sagas/root";
import withReduxEnhancer from "addon-redux/enhancer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Me"],
};
const enhancedReducer = persistReducer(persistConfig, rootReducer);
const configureStore = () => {
  const sagaMiddelware = createSagaMiddleware();
  const middleware = [sagaMiddelware];
  const store = createStore(
    enhancedReducer,
    composeWithDevTools(applyMiddleware(...middleware), withReduxEnhancer)
  );
  const persistor = persistStore(store);
  sagaMiddelware.run(rootSaga);
  return { store, persistor };
};

export default configureStore;
