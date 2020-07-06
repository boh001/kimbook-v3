import createRequestAction from "modules/reducers/createRequestAction";
import { handleActions } from "redux-actions";
import produce from "immer";

const IDCHECKACTION = "IDCHECK";
const EMAILCHECKACTION = "EMAILCHECK";
const CODECHECKACTION = "CODECHECK";

export const idCheckAction = createRequestAction(IDCHECKACTION);
export const emailCheckAction = createRequestAction(EMAILCHECKACTION);
export const codeCheckAction = createRequestAction(CODECHECKACTION);
console.log(idCheckAction);

const initialState = {
  idCheck: {
    show: false,
    result: false,
    error: "",
  },
  emailCheck: {
    show: false,
    result: false,
    error: "",
  },
  codeCheck: {
    show: false,
    result: false,
    error: "",
  },
};

export default handleActions(
  {
    [idCheckAction.REQUEST]: (state, { payload }) => {
      return state;
    },
  },
  {
    [idCheckAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.emailCheck.show = true;
        draft.idCheck.result = payload.result;
      });
    },
  },
  {
    [idCheckAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.idCheck.error = payload.error;
      });
    },
  },
  {
    [emailCheckAction.REQUEST]: (state) => state,
  },
  {
    [emailCheckAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.emailCheck.show = true;
        draft.emailCheck.result = payload.result;
      });
    },
  },
  {
    [emailCheckAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.emailCheck.error = payload.error;
      });
    },
  },
  {
    [codeCheckAction.REQUEST]: (state) => state,
  },
  {
    [codeCheckAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.emailCheck.show = true;
        draft.codeCheck.result = payload.result;
      });
    },
  },
  {
    [codeCheckAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.codeCheck.error = payload.error;
      });
    },
  },
  initialState
);
