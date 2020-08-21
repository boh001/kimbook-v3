import { all, takeEvery, takeLatest, put } from "redux-saga/effects";
import checkSaga from "./checkSaga";
import { apiSendEmail } from "utils/api/createPostData";
import requestSaga from "./requestSaga";
import {
  apiUserSupport,
  apiUserChangeProfile,
  apiUserChangePwd,
} from "utils/api/createPostData";
import {
  supportRequestAction,
  supportemailAction,
  supportcodeAction,
  supportSubmitAction,
  supportPwdSubmitAction,
} from "modules/reducers/Support";

const LoadUserSaga = requestSaga(supportRequestAction, apiUserSupport);
const submitSaga = requestSaga(supportSubmitAction, apiUserChangeProfile);
const pwdSubmitSaga = requestSaga(supportPwdSubmitAction, apiUserChangePwd);
const emailCheckSaga = checkSaga(supportemailAction, apiSendEmail);
function* codeCheckSaga({ payload }) {
  try {
    const { origin, verify } = payload;
    let result = false;
    let message = "인증 실패";
    console.log(origin, verify);
    if (origin === verify) {
      result = true;
      message = "인증 성공";
    }
    const data = {
      result,
      message,
    };
    yield put(supportcodeAction.success({ data }));
  } catch (e) {
    yield put(supportcodeAction.failure({ error: `${e.name}: ${e.message}` }));
  }
}
function* watchLoadUser() {
  yield takeEvery(supportRequestAction.REQUEST, LoadUserSaga);
}
function* watchSubmit() {
  yield takeEvery(supportSubmitAction.REQUEST, submitSaga);
}
function* watchPwdSubmit() {
  yield takeEvery(supportPwdSubmitAction.REQUEST, pwdSubmitSaga);
}
function* watchEmailCheck() {
  yield takeLatest(supportemailAction.REQUEST, emailCheckSaga);
}
function* watchCodeCheck() {
  yield takeLatest(supportcodeAction.REQUEST, codeCheckSaga);
}
export default function* watchSupport() {
  yield all([
    watchLoadUser(),
    watchEmailCheck(),
    watchCodeCheck(),
    watchSubmit(),
    watchPwdSubmit(),
  ]);
}
