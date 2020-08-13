import { handleActions } from "redux-actions";
import createRequestAction from "./createRequestAction";
import produce from "immer";

const DETAIL = "DETAIL";
const ONLIKEDETAILACTION = "ONLIKEDETAILACTION";
const ONMARKDETAILACTION = "ONMARKDETAILACTION";
const ADDCOMMENTDETAIL = "ADDCOMMENTDETAIL";
export const detailRequestAction = createRequestAction(DETAIL);
export const onLikeDetailAction = createRequestAction(ONLIKEDETAILACTION);
export const onMarkDetailAction = createRequestAction(ONMARKDETAILACTION);
export const addCommenDetailtAction = createRequestAction(ADDCOMMENTDETAIL);

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
    [onLikeDetailAction.REQUEST]: (state, { payload }) => state,
    [onLikeDetailAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        const {
          data: { likeCheck, idx },
        } = payload;
        if (likeCheck) {
          draft.content.likeUsers.push(draft.user._id);
        } else {
          draft.content.likeUsers.pop();
        }
      });
    },
    [onLikeDetailAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.error = payload.error;
      });
    },
    [onMarkDetailAction.REQUEST]: (state, { payload }) => state,
    [onMarkDetailAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        const {
          data: { markCheck, contentId },
        } = payload;
        if (markCheck) {
          draft.user.markContents.push(contentId);
        } else {
          draft.user.markContents.pop();
        }
      });
    },
    [onMarkDetailAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.error = payload.error;
      });
    },
    [addCommenDetailtAction.REQUEST]: (state, { payload }) => state,
    [addCommenDetailtAction.SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        const {
          data: { idx, comment },
        } = payload;
        draft.content.comments.push(comment);
      }),
    [addCommenDetailtAction.FAILURE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.error = payload.error;
      }),
  },

  initialState
);
