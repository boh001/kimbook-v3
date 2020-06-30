import { all } from "redux-saga/effects";
import helloSaga from "./test";

export default function* rootSaga() {
  yield all([helloSaga]);
}
