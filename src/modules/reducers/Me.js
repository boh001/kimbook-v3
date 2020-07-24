import { handleActions } from "redux-actions";
import createRequestAction from "./createRequestAction";
import produce from "immer";

const ME = "ME";
const ADDCOMMENT = "ADDCOMMENT";

export const meRequestAction = createRequestAction(ME);
export const addCommentAction = createRequestAction(ADDCOMMENT);

const initialState = {
  user: {
    nickname: "",
    avatarUrl: "",
  },
  contents: [
    {
      comments: [],
      like: 0,
      likeUsers: [],
      _id: "",
      authorId: {},
      files: [],
      text: "",
      createAt: new Date(),
      __v: 0,
    },
  ],
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
    [addCommentAction.REQUEST]: (state, { payload }) => state,
    [addCommentAction.SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        const {
          data: { idx, comment },
        } = payload;
        console.log(comment);
        draft.contents[idx].comments.push(comment);
      }),
    [addCommentAction.FAILURE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.error = payload.error;
      }),
  },
  initialState
);
