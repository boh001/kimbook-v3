import { all, takeEvery, put, call } from "redux-saga/effects";
import requestSaga from "./requestSaga";
import { apiUserSupport } from "utils/api/createPostData";
import { supportRequestAction } from "modules/reducers/Support";

const LoadUserSaga = requestSaga(supportRequestAction, apiUserSupport);
function* watchLoadUser() {
  yield takeEvery(supportRequestAction.REQUEST, LoadUserSaga);
}
export default function* watchSupport() {
  yield all([watchLoadUser()]);
}
