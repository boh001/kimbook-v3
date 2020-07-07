import { createAction } from "redux-actions";
import createSwitchReducer from "./createSwitchReducer";

export const START_LOADING = "START_LOADING";
export const FINISH_LOADING = "FINISH_LOADING";

export const startLoading = createAction(START_LOADING);
export const finishLoading = createAction(FINISH_LOADING);

const loading = createSwitchReducer(START_LOADING, FINISH_LOADING);

export default loading;
