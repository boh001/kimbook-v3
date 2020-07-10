import { takeLatest, all, takeEvery, put } from "redux-saga/effects";
import checkSaga from "./checkSaga";
import { apiIdCheck, apiSendEmail } from "utils/api/createPostData";
import {
  idCheckAction,
  emailCheckAction,
  codeCheckAction,
  pwdCheckAction,
  resetAction,
} from "modules/reducers/SignUp";
import { MODALCLOSEACTION } from "modules/reducers/modal";

const idCheckSaga = checkSaga(idCheckAction, apiIdCheck);
const emailCheckSaga = checkSaga(emailCheckAction, apiSendEmail);
const codeCheckSaga = function* ({ payload }) {
  try {
    const { origin, verify } = payload;
    let result = false;
    if (origin === verify) {
      result = true;
    }
    yield put(codeCheckAction.success({ result }));
  } catch (e) {
    yield put(codeCheckAction.failure({ error: `${e.name}: ${e.message}` }));
  }
};
const pwdCheckSaga = function* ({ payload }) {
  try {
    const { origin, verify } = payload;
    let result = false;
    if (origin === verify) {
      result = true;
    }
    yield put(pwdCheckAction.success({ result }));
  } catch (e) {
    yield put(pwdCheckAction.failure({ error: `${e.name}: ${e.message}` }));
  }
};
function* watchIdCheck() {
  yield takeLatest(idCheckAction.REQUEST, idCheckSaga);
}
function* watchEmailCheck() {
  yield takeLatest(emailCheckAction.REQUEST, emailCheckSaga);
}
function* watchCodeCheck() {
  yield takeLatest(codeCheckAction.REQUEST, codeCheckSaga);
}
function* watchPwdCheck() {
  yield takeEvery(pwdCheckAction.REQUEST, pwdCheckSaga);
}
function* watchModalClose() {
  yield takeEvery(MODALCLOSEACTION, function* ({ payload }) {
    if (payload.type === "LOGIN") {
      yield put(resetAction());
    }
  });
}
export default function* watchSignUp() {
  yield all([
    watchIdCheck(),
    watchEmailCheck(),
    watchCodeCheck(),
    watchPwdCheck(),
    watchModalClose(),
  ]);
}