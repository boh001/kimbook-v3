import createRequestAction from "modules/reducers/createRequestAction";
import { handleActions, createAction } from "redux-actions";
import produce from "immer";

const IDCHECKACTION = "IDCHECK";
const EMAILCHECKACTION = "EMAILCHECK";
const CODECHECKACTION = "CODECHECK";
const PWDCHECKACTION = "PWDCHECKACTION";
const TOTALCHECKACTION = "TOTALCHECKACTION";
const RESETACTION = "RESETACTION";

export const idCheckAction = createRequestAction(IDCHECKACTION);
export const emailCheckAction = createRequestAction(EMAILCHECKACTION);
export const codeCheckAction = createRequestAction(CODECHECKACTION);
export const pwdCheckAction = createRequestAction(PWDCHECKACTION);
export const totalCheckAction = createAction(TOTALCHECKACTION);
export const resetAction = createAction(RESETACTION);

const initialState = {
  idCheckState: {
    show: false,
    result: false,
    error: "",
  },
  emailCheckState: {
    show: false,
    result: false,
    error: "",
  },
  codeCheckState: {
    show: false,
    result: false,
    code: "fail",
    error: "",
  },
  pwdCheckState: {
    show: false,
    result: false,
    error: "",
  },
  totalCheckState: {
    show: false,
  },
};
const resetState = {
  idCheckState: {
    show: false,
    result: false,
    error: "",
  },
  emailCheckState: {
    show: false,
    result: false,
    error: "",
  },
  codeCheckState: {
    show: false,
    result: false,
    code: "fail",
    error: "",
  },
  pwdCheckState: {
    show: false,
    result: false,
    error: "",
  },
  totalCheckState: {
    show: false,
  },
};
export default handleActions(
  {
    [idCheckAction.REQUEST]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.idCheckState.show = false;
      });
    },
    [idCheckAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.idCheckState.show = true;
        draft.idCheckState.result = payload.result;
      });
    },
    [idCheckAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.idCheckState.error = payload.error;
      });
    },

    [emailCheckAction.REQUEST]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.emailCheckState.show = false;
      });
    },
    [emailCheckAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.emailCheckState.show = true;
        draft.codeCheckState.code = payload.code;
        draft.emailCheckState.result = payload.result;
      });
    },
    [emailCheckAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.emailCheckState.error = payload.error;
      });
    },

    [codeCheckAction.REQUEST]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.codeCheckState.show = false;
      });
    },
    [codeCheckAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.codeCheckState.show = true;
        draft.codeCheckState.result = payload.result;
      });
    },
    [codeCheckAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.codeCheckState.error = payload.error;
      });
    },

    [pwdCheckAction.REQUEST]: (state, action) => {
      return produce(state, (draft) => {
        draft.pwdCheckState.show = false;
      });
    },
    [pwdCheckAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.pwdCheckState.show = true;
        draft.pwdCheckState.result = payload.result;
      });
    },
    [pwdCheckAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.pwdCheckState.error = payload.error;
      });
    },
    [TOTALCHECKACTION]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.totalCheckState.show = true;
      });
    },
    [RESETACTION]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.idCheckState = resetState.idCheckState;
        draft.emailCheckState = resetState.emailCheckState;
        draft.codeCheckState = resetState.codeCheckState;
        draft.pwdCheckState = resetState.pwdCheckState;
        draft.totalCheckState = resetState.totalCheckState;
      });
    },
  },
  initialState
);
