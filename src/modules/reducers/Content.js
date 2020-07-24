import { handleActions, createAction } from "redux-actions";
import createRequestAction from "modules/reducers/createRequestAction";
import produce from "immer";

const CONTENT = "CONTENT";
const ONLIKEACTION = "ONLIKEACTION";

export const onLikeAction = createRequestAction(ONLIKEACTION);

const initialState = {
  likeCheck: false,
  error: "",
};
export default handleActions(
  {
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
  },
  initialState
);
