import { handleActions, createAction } from "redux-actions";
import produce from "immer";

const SHOWTHMBNAILACTION = "SHOWTHMBNAILACTION";
const SHOWTAGACTION = "SHOWTAGACTION";
const SHOWUPLOADACTION = "SHOWUPLOADACTION";
const DELETEUPLOADACTION = "DELETEUPLOADACTION";
const WRITE = "WRITE";

export const showThumbnailAction = createAction(SHOWTHMBNAILACTION);
export const showTagAction = createAction(SHOWTAGACTION);
export const showUploadAction = createAction(SHOWUPLOADACTION);
export const delteUploadAction = createAction(DELETEUPLOADACTION);
export const writeAction = { TYPE: WRITE };

const initialState = {
  slide: {
    tag: false,
    thumbnail: false,
  },
  uploads: [],
};
export default handleActions(
  {
    [SHOWTHMBNAILACTION]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.slide.thumbnail = payload.slide.thumbnail;
      }),
    [SHOWTAGACTION]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.slide.tag = payload.slide.tag;
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
