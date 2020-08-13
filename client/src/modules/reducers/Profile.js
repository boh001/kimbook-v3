import { handleActions } from "redux-actions";
import createRequestAction from "./createRequestAction";
import produce from "immer";

const PROFILE = "PROFILE";

export const profileRequestAction = createRequestAction(PROFILE);

const initialState = {
  user: {
    _id: "",
    nickname: "",
    avatarUrl: "",
    myContents: [],
    markContents: [],
    friends: [],
  },
  me: false,
};

export default handleActions(
  {
    [profileRequestAction.REQUEST]: (state, { payload }) => state,
    [profileRequestAction.SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        const {
          data: { user, me },
        } = payload;
        draft.user = user;
        draft.me = me;
      }),
    [profileRequestAction.FAILURE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.error = payload.error;
      }),
  },
  initialState
);
