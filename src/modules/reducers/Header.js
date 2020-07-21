import { handleActions, createAction } from "redux-actions";
import produce from "immer";

const SHOWSEARCHACTION = "SHOWSEARCHACTION";
const HEADER = "HEADER";

export const showSearchAction = createAction(SHOWSEARCHACTION);

export const headerAction = { TYPE: HEADER };

const initialState = {
  search: {
    show: false,
  },
};
export default handleActions(
  {
    [SHOWSEARCHACTION]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.search.show = !draft.search.show;
      }),
  },
  initialState
);
