import { takeEvery, all } from "redux-saga/effects";
import requestSaga from "./requestSaga";
import { apiUserInfo, apiComment } from "utils/api/createPostData";
import { meRequestAction, addCommentAction } from "modules/reducers/Me";

const infoSaga = requestSaga(meRequestAction, apiUserInfo);
const addCommentSaga = requestSaga(addCommentAction, apiComment);

function* watchInfo() {
  yield takeEvery(meRequestAction.REQUEST, infoSaga);
}
function* watchAddComment() {
  yield takeEvery(addCommentAction.REQUEST, addCommentSaga);
}
export default function* watchMe() {
  yield all([watchInfo(), watchAddComment()]);
}
