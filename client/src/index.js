import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App";
import { Provider } from "react-redux";
import configureStore from "./modules/store";
import { PersistGate } from "redux-persist/integration/react";
const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
