import { all } from "redux-saga/effects";
import watchSignUp from "./SignUp";
import watchMe from "./Me";
import watchSearch from "./Search";
import watchProfile from "./Profile";
import watchDetail from "./Detail";
import watchSupport from "./Support";

export default function* rootSaga() {
  yield all([
    watchSignUp(),
    watchMe(),
    watchSearch(),
    watchProfile(),
    watchDetail(),
    watchSupport(),
  ]);
}
