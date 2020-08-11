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
};

export default handleActions(
  {
    [profileRequestAction.REQUEST]: (state, { payload }) => state,
    [profileRequestAction.SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        const {
          data: { user },
        } = payload;
        draft.user = user;
      }),
    [profileRequestAction.FAILURE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.error = payload.error;
      }),
  },
  initialState
);
