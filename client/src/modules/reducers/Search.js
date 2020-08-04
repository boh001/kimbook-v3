import { handleActions, createAction } from "redux-actions";
import createRequestAction from "modules/reducers/createRequestAction";
import produce from "immer";

const SEARCH = "SEARCH";
const SHOWSEARCHACTION = "SHOWSEARCHACTION";

export const searchRequestAction = createRequestAction(SEARCH);
export const showSearchAction = createAction(SHOWSEARCHACTION);

const initialState = {
  search: {
    show: false,
  },
  results: [],
  error: "",
};
export default handleActions(
  {
    [SHOWSEARCHACTION]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.search.show = !draft.search.show;
      }),
    [searchRequestAction.REQUEST]: (state, { payload }) => state,
    [searchRequestAction.SUCCESS]: (state, { payload }) =>
      produce(state, (draft) => {
        const {
          data: { users },
        } = payload;
        draft.results = users;
      }),
    [searchRequestAction.FAILURE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.error = payload.error;
      }),
  },
  initialState
);
