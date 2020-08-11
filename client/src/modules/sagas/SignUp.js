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
function* codeCheckSaga({ payload }) {
  try {
    const { origin, verify } = payload;
    let result = false;
    let message = "인증 실패";
    if (origin === verify) {
      result = true;
      message = "인증 성공";
    }
    const data = {
      result,
      message,
    };
    yield put(codeCheckAction.success({ data }));
  } catch (e) {
    yield put(codeCheckAction.failure({ error: `${e.name}: ${e.message}` }));
  }
}
function* pwdCheckSaga({ payload }) {
  try {
    const { origin, verify } = payload;
    let result = false;
    let message = "일치하지 않습니다";
    if (origin === verify) {
      result = true;
      message = "일치합니다";
    }
    const data = {
      result,
      message,
    };
    yield put(pwdCheckAction.success({ data }));
  } catch (e) {
    yield put(pwdCheckAction.failure({ error: `${e.name}: ${e.message}` }));
  }
}
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
  yield takeEvery(MODALCLOSEACTION, function* resetSaga({ payload }) {
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
