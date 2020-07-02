import { put, call } from "redux-saga/effects";
import { startLoading, finishLoading } from "../reducers/loading";

export default (actions, req) =>
  function* ({ payload }) {
    try {
      yield put(startLoading({ type: actions.TYPE }));
      const result = yield call(req, payload);
      yield put(actions.success({ result }));
    } catch (e) {
      yield put(actions.failure({ error: `${e.name}: ${e.message}` }));
    } finally {
      yield put(finishLoading({ type: actions.TYPE }));
    }
  };
