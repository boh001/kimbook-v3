import { put, call } from "redux-saga/effects";

export default (actions, api) =>
  function* ({ payload }) {
    try {
      const {
        data: { result, code },
      } = yield call(api, payload);
      yield put(actions.success({ result, code }));
    } catch (e) {
      yield put(actions.failure({ error: `${e.name}: ${e.message}` }));
    }
  };
