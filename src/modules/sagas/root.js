import { all } from "redux-saga/effects";
import watchSignUp from "./SignUp";
import watchUpload from "./Me";

export default function* rootSaga() {
  yield all([watchSignUp(), watchUpload()]);
}
