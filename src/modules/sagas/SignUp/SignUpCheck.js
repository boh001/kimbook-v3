import { takeLatest, all, take } from "redux-saga/effects";
import checkSaga from "../checkSaga";
import { apiIdCheck, apiEmail } from "utils/api";
import {
  idCheckAction,
  emailCheckAction,
  codeCheckAction,
} from "modules/reducers/SignUp/SignUpCheck";

const idCheckSaga = checkSaga(idCheckAction, apiIdCheck);
const emailCheckSaga = checkSaga(emailCheckAction, apiEmail);
const codeCheckSaga = checkSaga(codeCheckAction);

function* watchIdCheck() {
  yield takeLatest(idCheckAction.REQUEST, idCheckSaga);
}
function* watchEmailCheck() {
  yield takeLatest(emailCheckAction.REQUEST, emailCheckSaga);
}
function* watchCodeCheck() {
  yield takeLatest(codeCheckAction.REQUEST, codeCheckSaga);
}
export default function* watchSignUpCheck() {
  yield all([watchIdCheck(), watchEmailCheck(), watchCodeCheck()]);
}
