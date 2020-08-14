import { all, takeEvery, takeLatest } from "redux-saga/effects";
import checkSaga from "./checkSaga";
import { apiSendEmail } from "utils/api/createPostData";
import requestSaga from "./requestSaga";
import { apiUserSupport } from "utils/api/createPostData";
import {
  supportRequestAction,
  supportemailAction,
} from "modules/reducers/Support";

const LoadUserSaga = requestSaga(supportRequestAction, apiUserSupport);
const emailCheckSaga = checkSaga(supportemailAction, apiSendEmail);
function* watchLoadUser() {
  yield takeEvery(supportRequestAction.REQUEST, LoadUserSaga);
}
function* watchEmailCheck() {
  yield takeLatest(supportemailAction.REQUEST, emailCheckSaga);
}
export default function* watchSupport() {
  yield all([watchLoadUser(), watchEmailCheck()]);
}
