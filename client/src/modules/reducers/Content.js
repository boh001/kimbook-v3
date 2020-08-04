import { handleActions, createAction } from "redux-actions";
import createRequestAction from "modules/reducers/createRequestAction";
import produce from "immer";

const CONTENT = "CONTENT";
const INITALCHECKACTION = "INITALCHECKACTION";
const ONLIKEACTION = "ONLIKEACTION";
const ONMARKACTION = "ONMARKACTION";

export const initialCheckAction = createAction(INITALCHECKACTION);
export const onLikeAction = createRequestAction(ONLIKEACTION);
export const onMarkAction = createRequestAction(ONMARKACTION);
export const contentAction = { TYPE: CONTENT };

const initialState = {
  likeCheck: false,
  markCheck: false,
  error: "",
};
export default handleActions(
  {
    [initialCheckAction]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.likeCheck = payload.likeCheck;
        draft.markCheck = payload.markCheck;
      });
    },

    [onLikeAction.REQUEST]: (state, { payload }) => state,
    [onLikeAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.likeCheck = payload.data.result;
      });
    },
    [onLikeAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.error = payload.error;
      });
    },
    [onMarkAction.REQUEST]: (state, { payload }) => state,
    [onMarkAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.markCheck = payload.data.result;
      });
    },
    [onMarkAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.error = payload.error;
      });
    },
  },
  initialState
);
