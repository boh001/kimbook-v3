import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const IDCHECKACTION = "IDCHECK";
const EMAILCHECKACTION = "EMAILCHECK";
const CODECHECKACTION = "CODECHECK";

export const idCheckAction = createAction(IDCHECKACTION);
export const emailCheckAction = createAction(EMAILCHECKACTION);
export const codeCheckAction = createAction(CODECHECKACTION);

const initialState = {
  idCheck: false,
  emailCheck: false,
  codeCheck: false,
};

export default handleActions(
  {
    [IDCHECKACTION]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.idCheck = payload;
      });
    },
  },
  {
    [EMAILCHECKACTION]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.emailCheck = payload;
      });
    },
  },
  {
    [CODECHECKACTION]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.codeCheck = payload;
      });
    },
  },
  initialState
);
