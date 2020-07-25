import { all, takeEvery, put, call } from "redux-saga/effects";
import { onLikeAction, onMarkAction } from "modules/reducers/Content";
import { apiLike, apiMark } from "utils/api/createPostData";

function* likeSaga({ payload }) {
  try {
    const { data } = yield call(apiLike, payload);
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
function* watchLike() {
  yield takeEvery(onLikeAction.REQUEST, likeSaga);
}
function* watchMark() {
  yield takeEvery(onMarkAction.REQUEST, markSaga);
}
export default function* watchContent() {
  yield all([watchLike(), watchMark()]);
}
