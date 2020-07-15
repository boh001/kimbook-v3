import { handleActions, createAction } from "redux-actions";
import produce from "immer";

const SHOWSEARCHACTION = "SHOWSEARCHACTION";
const HEADER = "HEADER";

export const showSearchAction = createAction(SHOWSEARCHACTION);
export const headerAction = { TYPE: HEADER };
const initialState = {
  show: false,
};
export default handleActions(
  {
    [SHOWSEARCHACTION]: (state, action) =>
      produce(state, (draft) => {
        draft.show = !draft.show;
      }),
  },
  initialState
);
