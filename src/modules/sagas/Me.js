import { takeEvery, all } from "redux-saga/effects";
import requestSaga from "./requestSaga";
import { apiUserInfo } from "utils/api/createPostData";
import { meRequestAction } from "modules/reducers/Me";

const infoSaga = requestSaga(meRequestAction, apiUserInfo);

export default function* watchInfo() {
  yield takeEvery(meRequestAction.REQUEST, infoSaga);
}
