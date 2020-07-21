import { handleActions } from "redux-actions";
import createRequestAction from "./createRequestAction";
import produce from "immer";

const ME = "ME";
export const meRequestAction = createRequestAction(ME);

const initialState = {
  user: {
    nickname: "",
    avatarUrl: "",
  },
  contents: [],
  error: "",
};
export default handleActions(
  {
    [meRequestAction.REQUEST]: (state, { payload }) => state,
    [meRequestAction.SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        const {
          data: { user, contents },
        } = payload;
        draft.user = user;
        draft.contents = contents;
      }),
    [meRequestAction.FAILURE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.error = payload.error;
      }),
  },
  initialState
);
