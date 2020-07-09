import { all } from "redux-saga/effects";
import watchSignUp from "./SignUp";

export default function* rootSaga() {
  yield all([watchSignUp()]);
}
