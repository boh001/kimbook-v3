import { put, call } from "redux-saga/effects";
import { startLoading, finishLoading } from "../reducers/loading";

export default (actions, api) =>
  function*({ payload }) {
    try {
      yield put(startLoading({ type: actions.TYPE }));
      console.log(payload);
      const { data } = yield call(api, payload);
      yield put(actions.success({ data }));
    } catch (e) {
      yield put(actions.failure({ error: `${e.name}: ${e.message}` }));
    } finally {
      yield put(finishLoading({ type: actions.TYPE }));
    }
  };
