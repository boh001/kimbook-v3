import { all, takeEvery } from "redux-saga/effects";
import requestSaga from "./requestSaga";
import { apiDetail } from "utils/api/createPostData";
import { detailRequestAction } from "modules/reducers/Detail";

const loadContentDetailSaga = requestSaga(detailRequestAction, apiDetail);

function* watchLoadContentDetail() {
  yield takeEvery(detailRequestAction.REQUEST, loadContentDetailSaga);
}
export default function* watchDetail() {
  yield all([watchLoadContentDetail()]);
}
