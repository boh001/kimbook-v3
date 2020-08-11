import { handleActions } from "redux-actions";
import createRequestAction from "./createRequestAction";
import produce from "immer";

const SUPPORT = "SUPPORT";
export const supportRequestAction = createRequestAction(SUPPORT);
const initialState = {
  user: {
    _id: "",
    nickname: "",
    avatarUrl: "",
    myContents: [],
    markContents: [],
  },
};
export default handleActions(
  {
    [supportRequestAction.REQUEST]: (state, { payload }) => state,
    [supportRequestAction.SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        const {
          data: { user },
        } = payload;
        draft.user = user;
      }),
    [supportRequestAction.FAILURE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.error = payload.error;
      }),
  },
  initialState
);
