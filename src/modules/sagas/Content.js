import { all, takeEvery, put, call } from "redux-saga/effects";
import { onLikeAction } from "modules/reducers/Content";
import { apiLike } from "utils/api/createPostData";

const likeSaga = function*({ payload }) {
  try {
    const { data } = yield call(apiLike, payload);
    yield put(onLikeAction.success({ data }));
  } catch (e) {
    yield put(onLikeAction.failure({ error: `${e.name}: ${e.message}` }));
  }
};
function* watchLike() {
  yield takeEvery(onLikeAction.REQUEST, likeSaga);
}
export default function* watchContent() {
  yield all([watchLike()]);
}
