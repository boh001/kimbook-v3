import { all } from "redux-saga/effects";
import watchSignUpCheck from "./SignUp/SignUpCheck";

export default function* rootSaga() {
  yield all([watchSignUpCheck()]);
}
