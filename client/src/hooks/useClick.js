import { useDispatch } from "react-redux";
import { useCallback } from "react";

export default (action, payload) => {
  const dispatch = useDispatch();
  return useCallback(
    (e) => {
      e.preventDefault();
      dispatch(action.request({ payload }));
    },
    [dispatch, action, payload]
  );
};
