import { handleActions, createAction } from "redux-actions";
import produce from "immer";

const SHOWSLIDEACTION = "SHOWSLIDEACTION";
const SHOWUPLOADACTION = "SHOWUPLOADACTION";
const DELETEUPLOADACTION = "DELETEUPLOADACTION";
const WRITE = "WRITE";

export const showSlideAction = createAction(SHOWSLIDEACTION);
export const showUploadAction = createAction(SHOWUPLOADACTION);
export const delteUploadAction = createAction(DELETEUPLOADACTION);
export const writeAction = { TYPE: WRITE };

const initialState = {
  slide: false,
  uploads: [],
};
export default handleActions(
  {
    [SHOWSLIDEACTION]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.slide = payload.slide;
      }),
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
