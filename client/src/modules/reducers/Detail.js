import { handleActions, createAction } from "redux-actions";
import produce from "immer";

const DETAIL = "DETAIL";

const initialState = {};
export const moreAction = { TYPE: DETAIL };
export default handleActions({}, initialState);
