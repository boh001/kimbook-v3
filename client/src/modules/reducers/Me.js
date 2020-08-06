import { handleActions } from "redux-actions";
import createRequestAction from "./createRequestAction";
import produce from "immer";

const ME = "ME";
const ONLIKEACTION = "ONLIKEACTION";
const ONMARKACTION = "ONMARKACTION";
const ADDCOMMENT = "ADDCOMMENT";

export const meRequestAction = createRequestAction(ME);
export const onLikeAction = createRequestAction(ONLIKEACTION);
export const onMarkAction = createRequestAction(ONMARKACTION);
export const addCommentAction = createRequestAction(ADDCOMMENT);

const initialState = {
  user: {
    _id: "",
    nickname: "",
    avatarUrl: "",
    myContents: [],
    markContents: [],
  },
  contents: [
    {
      comments: [],
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
    [onLikeAction.REQUEST]: (state, { payload }) => state,
    [onLikeAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        const {
          data: { likeCheck, idx },
        } = payload;
        if (likeCheck) {
          draft.contents[idx].likeUsers.push(draft.user._id);
        } else {
          draft.contents[idx].likeUsers.pop();
        }
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
    [addCommentAction.REQUEST]: (state, { payload }) => state,
    [addCommentAction.SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        const {
          data: { idx, comment },
        } = payload;
        draft.contents[idx].comments.push(comment);
      }),
    [addCommentAction.FAILURE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.error = payload.error;
      }),
  },
  initialState
);
