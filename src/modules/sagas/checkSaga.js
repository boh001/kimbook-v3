import { put, call } from "redux-saga/effects";

export default (actions, api) =>
  function* ({ payload }) {
    try {
      console.log(payload);
      const result = yield call(api, payload);
      console.log(result);

      yield put(actions.success({ result }));
    } catch (e) {
      yield put(actions.failure({ error: `${e.name}: ${e.message}` }));
    }
  };
