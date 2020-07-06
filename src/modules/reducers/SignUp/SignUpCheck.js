import createRequestAction from "modules/reducers/createRequestAction";
import { handleActions } from "redux-actions";
import produce from "immer";

const IDCHECKACTION = "IDCHECK";
const EMAILCHECKACTION = "EMAILCHECK";
const CODECHECKACTION = "CODECHECK";

export const idCheckAction = createRequestAction(IDCHECKACTION);
export const emailCheckAction = createRequestAction(EMAILCHECKACTION);
export const codeCheckAction = createRequestAction(CODECHECKACTION);

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
};

export default handleActions(
  {
    [idCheckAction.REQUEST]: (state, { payload }) => {
      return state;
    },
  },
  {
    [idCheckAction.SUCCESS]: (state, { payload }) => {
      console.log(payload);
      return produce(state, (draft) => {
        draft.idCheckState.show = true;
        draft.idCheckState.result = payload.result;
      });
    },
  },
  {
    [idCheckAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.idCheckState.error = payload.error;
      });
    },
  },
  {
    [emailCheckAction.REQUEST]: (state) => state,
  },
  {
    [emailCheckAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.emailCheckState.show = true;
        draft.emailCheckState.result = payload.result;
      });
    },
  },
  {
    [emailCheckAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.emailCheckState.error = payload.error;
      });
    },
  },
  {
    [codeCheckAction.REQUEST]: (state) => state,
  },
  {
    [codeCheckAction.SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.codeCheckState.show = true;
        draft.codeCheckState.result = payload.result;
      });
    },
  },
  {
    [codeCheckAction.FAILURE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.codeCheckState.error = payload.error;
      });
    },
  },
  initialState
);
