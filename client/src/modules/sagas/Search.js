import { takeEvery, all } from "redux-saga/effects";
import requestSaga from "./requestSaga";
import { apiUserSearch } from "utils/api/createPostData";
import { searchRequestAction } from "modules/reducers/Search";

const userSearchSaga = requestSaga(searchRequestAction, apiUserSearch);

function* watchUserSearch() {
  yield takeEvery(searchRequestAction.REQUEST, userSearchSaga);
}

export default function* watchSearch() {
  yield all([watchUserSearch()]);
}
