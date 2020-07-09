import { createAction } from "redux-actions";
import createSwitchReducer from "./createSwitchReducer";

const MODALOPENACTION = "MODALOPENACTION";
export const MODALCLOSEACTION = "MODALCLOSEACTION";

export const modalOpenAction = createAction(MODALOPENACTION);
export const modalCloseAction = createAction(MODALCLOSEACTION);

const modal = createSwitchReducer(MODALOPENACTION, MODALCLOSEACTION);

export default modal;
