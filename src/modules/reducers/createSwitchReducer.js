import { handleActions } from "redux-actions";
import produce from "immer";

export default (START, FINISH) =>
  handleActions(
    {
      [START]: (state, action) => {
        return produce(state, (draft) => {
          draft[action.payload.type] = true;
        });
      },

      [FINISH]: (state, action) => {
        return produce(state, (draft) => {
          draft[action.payload.type] = false;
        });
      },
    },
    {}
  );
