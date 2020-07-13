import { handleActions, createAction } from "redux-actions";
import produce from "immer";

const SHOWSEARCHACTION = "SHOWSEARCHACTION";

export const showSearchAction = createAction(SHOWSEARCHACTION);

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
