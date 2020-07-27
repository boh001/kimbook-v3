import { all } from "redux-saga/effects";
import watchSignUp from "./SignUp";
import watchMe from "./Me";
import watchContent from "./Content";

export default function* rootSaga() {
  yield all([watchSignUp(), watchMe(), watchContent()]);
}