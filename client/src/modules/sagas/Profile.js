import { all, takeEvery } from "redux-saga/effects";
import requestSaga from "./requestSaga";
import { apiUserProfile } from "utils/api/createPostData";
import { profileRequestAction } from "modules/reducers/Profile";

const loadUserSaga = requestSaga(profileRequestAction, apiUserProfile);

function* watchLoadUser() {
  yield takeEvery(profileRequestAction.REQUEST, loadUserSaga);
}
export default function* watchProfile() {
  yield all([watchLoadUser()]);
}
