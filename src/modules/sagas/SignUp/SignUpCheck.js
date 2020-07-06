import { takeLatest, all } from "redux-saga/effects";
import checkSaga from "../checkSaga";
import { apiIdCheck, apiSendEmail } from "utils/api/createPostData";
import {
  idCheckAction,
  emailCheckAction,
  codeCheckAction,
} from "modules/reducers/SignUp/SignUpCheck";

const idCheckSaga = checkSaga(idCheckAction, apiIdCheck);
const emailCheckSaga = checkSaga(emailCheckAction, apiSendEmail);
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
