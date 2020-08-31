import { handleActions } from "redux-actions";
import createRequestAction from "./createRequestAction";
import produce from "immer";

const PROFILE = "PROFILE";
const PROFILEUSERFOLLOW = "PROFILEUSERFOLLOW";
export const profileRequestAction = createRequestAction(PROFILE);
export const profileUserFollowAction = createRequestAction(PROFILEUSERFOLLOW);

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
  error: "",
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
    [profileUserFollowAction.REQUEST]: (state, { payload }) => state,
    [profileUserFollowAction.SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        const {
          data: { userId, result },
        } = payload;
        if (result) {
          draft.user.follower.push(userId);
        } else {
          draft.user.follower.pop();
        }
      }),
    [profileUserFollowAction.FAILURE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.error = payload.error;
      }),
  },
  initialState
);
