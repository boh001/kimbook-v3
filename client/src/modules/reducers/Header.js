import { handleActions, createAction } from "redux-actions";
import produce from "immer";

const HEADERWRITEMODALOPEN = "HEADERWRITEMODALOPEN";
const HEADERLOGOUTMODALOPEN = "HEADERLOGOUTMODALOPEN";
const HEADERLOGOUT = "HEADERLOGOUT";

export const HeaderWriteModalOpenAction = { TYPE: HEADERWRITEMODALOPEN };
export const HeaderLogoutModalOpenAction = { TYPE: HEADERLOGOUTMODALOPEN };
export const HeaderLogoutAction = createAction(HEADERLOGOUT);

const initialState = {};
export default handleActions({}, initialState);
