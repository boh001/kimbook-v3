import { handleActions } from "redux-actions";
import createRequestAction from "./createRequestAction";
import produce from "immer";

const DETAIL = "DETAIL";

export const detailRequestAction = createRequestAction(DETAIL);

const initialState = {
  user: {
    _id: "",
    nickname: "",
    avatarUrl: "",
    myContents: [],
    markContents: [],
  },
  content: {
    comments: [],
    likeUsers: [],
    _id: "",
    authorId: {},
    files: [],
    text: "",
    createAt: new Date(),
    __v: 0,
  },
};

export default handleActions(
  {
    [detailRequestAction.REQUEST]: (state, { payload }) => state,
    [detailRequestAction.SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        const {
          data: { user, content },
        } = payload;
        draft.user = user;
        draft.content = content;
      }),
    [detailRequestAction.FAILURE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.error = payload.error;
      }),
  },
  initialState
);
