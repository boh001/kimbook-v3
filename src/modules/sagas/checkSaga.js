import { put, call } from "redux-saga/effects";

export default (actions, api) =>
  function* ({ payload }) {
    try {
      const {
        data: { result },
      } = yield call(api, payload);
      yield put(actions.success({ result }));
    } catch (e) {
      yield put(actions.failure({ error: `${e.name}: ${e.message}` }));
    }
  };
