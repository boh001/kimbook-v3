import { all } from "redux-saga/effects";
import watchSignUp from "./SignUp";
import watchMe from "./Me";
import watchSearch from "./Search";

export default function* rootSaga() {
  yield all([watchSignUp(), watchMe(), watchSearch()]);
}
