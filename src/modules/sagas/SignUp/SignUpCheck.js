import { takeLatest, all, takeEvery, put } from "redux-saga/effects";
import checkSaga from "../checkSaga";
import { apiIdCheck, apiSendEmail } from "utils/api/createPostData";
import {
  idCheckAction,
  emailCheckAction,
  codeCheckAction,
  pwdCheckAction,
} from "modules/reducers/SignUp/SignUpCheck";

const idCheckSaga = checkSaga(idCheckAction, apiIdCheck);
const emailCheckSaga = checkSaga(emailCheckAction, apiSendEmail);
const codeCheckSaga = checkSaga(codeCheckAction);
const pwdCheckSaga = function* ({ payload }) {
  try {
    const { pwd, verifyPwd } = payload;
    let result = false;
    if (pwd === verifyPwd) {
      result = true;
    }
    yield put(pwdCheckAction.success({ result }));
  } catch (e) {
    console.log(e);

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
export default function* watchSignUpCheck() {
  yield all([
    watchIdCheck(),
    watchEmailCheck(),
    watchCodeCheck(),
    watchPwdCheck(),
  ]);
}
