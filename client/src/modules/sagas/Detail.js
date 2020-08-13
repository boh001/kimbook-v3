import { all, takeEvery, call, put } from "redux-saga/effects";
import requestSaga from "./requestSaga";
import {
  apiDetail,
  apiLike,
  apiMark,
  apiComment,
} from "utils/api/createPostData";
import {
  detailRequestAction,
  onLikeDetailAction,
  onMarkDetailAction,
  addCommenDetailtAction,
} from "modules/reducers/Detail";

const loadContentDetailSaga = requestSaga(detailRequestAction, apiDetail);
function* likeSaga({ payload }) {
  try {
    const { data } = yield call(apiLike, payload);
    yield put(onLikeDetailAction.success({ data }));
  } catch (e) {
    yield put(onLikeDetailAction.failure({ error: `${e.name}: ${e.message}` }));
  }
}
function* markSaga({ payload }) {
  try {
    const { data } = yield call(apiMark, payload);
    yield put(onMarkDetailAction.success({ data }));
  } catch (e) {
    yield put(onMarkDetailAction.failure({ error: `${e.name}: ${e.message}` }));
  }
}
const addCommentSaga = requestSaga(addCommenDetailtAction, apiComment);

function* watchLoadContentDetail() {
  yield takeEvery(detailRequestAction.REQUEST, loadContentDetailSaga);
}
function* watchLike() {
  yield takeEvery(onLikeDetailAction.REQUEST, likeSaga);
}
function* watchMark() {
  yield takeEvery(onMarkDetailAction.REQUEST, markSaga);
}
function* watchAddComment() {
  yield takeEvery(addCommenDetailtAction.REQUEST, addCommentSaga);
}
export default function* watchDetail() {
  yield all([
    watchLoadContentDetail(),
    watchLike(),
    watchMark(),
    watchAddComment(),
  ]);
}
