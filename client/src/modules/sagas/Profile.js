import { all, takeEvery } from "redux-saga/effects";
import requestSaga from "./requestSaga";
import { apiUserProfile, apiUserFollow } from "utils/api/createPostData";
import {
  profileRequestAction,
  profileUserFollowAction,
} from "modules/reducers/Profile";

const loadUserSaga = requestSaga(profileRequestAction, apiUserProfile);
const followUserSaga = requestSaga(profileUserFollowAction, apiUserFollow);
function* watchLoadUser() {
  yield takeEvery(profileRequestAction.REQUEST, loadUserSaga);
}
function* watchFollowUser() {
  yield takeEvery(profileUserFollowAction.REQUEST, followUserSaga);
}
export default function* watchProfile() {
  yield all([watchLoadUser(), watchFollowUser()]);
}
