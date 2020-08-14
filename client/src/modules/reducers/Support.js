import { handleActions } from "redux-actions";
import createRequestAction from "./createRequestAction";
import produce from "immer";

const SUPPORT = "SUPPORT";
const SUPPORTEMAIL = "SUPPORTEMAIL";
const SUPPORTCODE = "SUPPORTCODE";
export const supportRequestAction = createRequestAction(SUPPORT);
export const supportemailAction = createRequestAction(SUPPORTEMAIL);
export const supportcodeAction = createRequestAction(SUPPORTCODE);

const initialState = {
  user: {
    _id: "",
    nickname: "",
    avatarUrl: "",
    myContents: [],
    markContents: [],
  },
  emailCheckState: {
    result: false,
    show: false,
    message: "",
    error: "",
  },
  codeCheckState: {
    show: false,
    result: false,
    message: "",
    error: "",
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
    [supportemailAction.REQUEST]: (state, { payload }) => state,
    [supportemailAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        const {
          data: { result, message, code },
        } = payload;
        draft.emailCheckState.show = true;
        draft.codeCheckState.code = code;
        draft.emailCheckState.result = result;
        draft.emailCheckState.message = message;
      });
    },
    [supportemailAction.FAILURE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.error = payload.error;
      }),
    [supportcodeAction.REQUEST]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.codeCheckState.show = false;
      });
    },
    [supportcodeAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        const {
          data: { result, message },
        } = payload;
        draft.codeCheckState.show = true;
        draft.codeCheckState.result = result;
        draft.codeCheckState.message = message;
      });
    },
    [supportcodeAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.codeCheckState.error = payload.error;
      });
    },
  },
  initialState
);
