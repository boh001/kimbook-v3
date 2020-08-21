import { createAction, handleActions } from "redux-actions";
import createRequestAction from "./createRequestAction";
import produce from "immer";

const SUPPORT = "SUPPORT";
const SUPPORTEMAIL = "SUPPORTEMAIL";
const SUPPORTCODE = "SUPPORTCODE";
const DELETEAVATAR = "DELETEAVATAR";
const UPLOADAVATAR = "UPLOADAVATAR";
const NONICKNAME = "NONICKNAME";
const NICKNAMEOKAY = "NICKNAMEOKAY";
const SUPPORTSUBMIT = "SUPPORTSUBMIT";
const SUPPORTPWDSUBMIT = "SUPPORTPWDSUBMIT";
export const supportRequestAction = createRequestAction(SUPPORT);
export const supportemailAction = createRequestAction(SUPPORTEMAIL);
export const supportcodeAction = createRequestAction(SUPPORTCODE);
export const supportSubmitAction = createRequestAction(SUPPORTSUBMIT);
export const supportPwdSubmitAction = createRequestAction(SUPPORTPWDSUBMIT);
export const deleteAvatarAction = createAction(DELETEAVATAR);
export const uploadAvatarAction = createAction(UPLOADAVATAR);
export const noNicknameAction = createAction(NONICKNAME);
export const nicknameOkayAction = createAction(NICKNAMEOKAY);

const initialState = {
  user: {
    _id: "",
    nickname: "",
    avatarUrl: "",
    myContents: [],
    markContents: [],
  },
  nicknameCheckState: {
    result: true,
    message: "",
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
  submitCheckState: {
    result: false,
    message: "",
    error: "",
  },
  pwdSubmitCheckState: {
    result: false,
    message: "",
    error: "",
  },
};
export default handleActions(
  {
    [NONICKNAME]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.nicknameCheckState.message = "닉네임을 입력하세요";
        draft.nicknameCheckState.result = false;
      }),
    [NICKNAMEOKAY]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.nicknameCheckState.message = "";
        draft.nicknameCheckState.result = true;
      }),
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
    [deleteAvatarAction]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.user.avatarUrl = "";
      });
    },
    [uploadAvatarAction]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.user.avatarUrl = payload.uploadfile;
      });
    },
    [supportSubmitAction.REQUEST]: (state, { payload }) => state,
    [supportSubmitAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        const {
          data: { result, message },
        } = payload;
        draft.submitCheckState.result = result;
      });
    },
    [supportSubmitAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.submitCheckState.error = payload.error;
      });
    },
    [supportPwdSubmitAction.REQUEST]: (state, { payload }) => state,
    [supportPwdSubmitAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        const {
          data: { result, message },
        } = payload;
        draft.pwdSubmitCheckState.result = result;
      });
    },
    [supportPwdSubmitAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.pwdSubmitCheckState.error = payload.error;
      });
    },
  },
  initialState
);
