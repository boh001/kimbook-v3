import { handleActions, createAction } from "redux-actions";
import produce from "immer";

const SHOWUPLOADACTION = "SHOWUPLOADACTION";
const DELETEUPLOADACTION = "DELETEUPLOADACTION";
const WRITE = "WRITE";

export const showUploadAction = createAction(SHOWUPLOADACTION);
export const delteUploadAction = createAction(DELETEUPLOADACTION);
export const writeAction = { TYPE: WRITE };

const initialState = {
  uploads: [],
};
export default handleActions(
  {
    [SHOWUPLOADACTION]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.uploads = payload.uploads;
      }),
    [DELETEUPLOADACTION]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.uploads = payload.uploads;
      }),
  },
  initialState
);
