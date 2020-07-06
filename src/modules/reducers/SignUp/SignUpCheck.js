import createRequestAction from "modules/reducers/createRequestAction";
import { handleActions, createAction } from "redux-actions";
import produce from "immer";

const IDCHECKACTION = "IDCHECK";
const EMAILCHECKACTION = "EMAILCHECK";
const CODECHECKACTION = "CODECHECK";
const PWDCHECKACTION = "PWDCHECKACTION";

export const idCheckAction = createRequestAction(IDCHECKACTION);
export const emailCheckAction = createRequestAction(EMAILCHECKACTION);
export const codeCheckAction = createRequestAction(CODECHECKACTION);
export const pwdCheckAction = createRequestAction(PWDCHECKACTION);

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
    error: "",
  },
  pwdCheckState: {
    show: false,
    result: false,
    error: "",
  },
};

export default handleActions(
  {
    [idCheckAction.REQUEST]: (state) => state,
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

    [emailCheckAction.REQUEST]: (state) => state,
    [emailCheckAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.emailCheckState.show = true;
        draft.emailCheckState.result = payload.result;
      });
    },
    [emailCheckAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.emailCheckState.error = payload.error;
      });
    },

    [codeCheckAction.REQUEST]: (state) => state,
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

    [pwdCheckAction.REQUEST]: (state) => state,
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
  },
  initialState
);
