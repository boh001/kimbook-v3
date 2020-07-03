import { createAction, handleActions } from "redux-actions";
import produce from "immer";

export const START_LOADING = "START_LOADING";
export const FINISH_LOADING = "FINISH_LOADING";

const startLoading = createAction(START_LOADING);
const finishLoading = createAction(FINISH_LOADING);
