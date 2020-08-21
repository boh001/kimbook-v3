import { handleActions } from "redux-actions";
import createRequestAction from "./createRequestAction";
import produce from "immer";

const PROFILE = "PROFILE";
const PROFILESTARTFOLLOW = "PROFILESTARTFOLLOW";
export const profileRequestAction = createRequestAction(PROFILE);
export const profileStartFollowAction = createRequestAction(PROFILESTARTFOLLOW);

const initialState = {
  user: {
    _id: "",
    nickname: "",
    avatarUrl: "",
    myContents: [],
    markContents: [],
    follow: [],
    follower: [],
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
    [profileStartFollowAction.REQUEST]: (state, { payload }) => state,
    [profileStartFollowAction.SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {}),
    [profileStartFollowAction.FAILURE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.error = payload.error;
      }),
  },
  initialState
);
