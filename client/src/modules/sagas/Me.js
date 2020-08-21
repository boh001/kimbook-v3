import { all, takeEvery, put, call } from "redux-saga/effects";
import requestSaga from "./requestSaga";
import {
  apiUserInfo,
  apiLike,
  apiMark,
  apiComment,
  apiContentDelete,
} from "utils/api/createPostData";
import {
  meRequestAction,
  onLikeAction,
  onMarkAction,
  addCommentAction,
  DeleteContentAction,
} from "modules/reducers/Me";

const loginUserSaga = requestSaga(meRequestAction, apiUserInfo);
function* likeSaga({ payload }) {
  try {
    const { data } = yield call(apiLike, payload);
    console.log(data);
    yield put(onLikeAction.success({ data }));
  } catch (e) {
    yield put(onLikeAction.failure({ error: `${e.name}: ${e.message}` }));
  }
}
function* markSaga({ payload }) {
  try {
    const { data } = yield call(apiMark, payload);
    yield put(onMarkAction.success({ data }));
  } catch (e) {
    yield put(onMarkAction.failure({ error: `${e.name}: ${e.message}` }));
  }
}
const addCommentSaga = requestSaga(addCommentAction, apiComment);
function* deleteSaga({ payload }) {
  try {
    yield call(apiContentDelete, payload);
  } catch (e) {
    yield put(
      DeleteContentAction.failure({ error: `${e.name}: ${e.message}` })
    );
  }
}
function* watchLoginUser() {
  yield takeEvery(meRequestAction.REQUEST, loginUserSaga);
}
function* watchLike() {
  yield takeEvery(onLikeAction.REQUEST, likeSaga);
}
function* watchMark() {
  yield takeEvery(onMarkAction.REQUEST, markSaga);
}
function* watchAddComment() {
  yield takeEvery(addCommentAction.REQUEST, addCommentSaga);
}
function* watchDelete() {
  yield takeEvery(DeleteContentAction.REQUEST, deleteSaga);
}
export default function* watchMe() {
  yield all([
    watchLoginUser(),
    watchLike(),
    watchMark(),
    watchAddComment(),
    watchDelete(),
  ]);
}
