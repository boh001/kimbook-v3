import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Frame } from "./DataLoader.style";
import Loading from "Components/Loading/Loading";
import useLoader from "hooks/useLoader";

const DataLoader = ({ children, action, payload }) => {
  const dispatch = useDispatch();
  const isLoading = useLoader(action.TYPE);
  useEffect(() => {
    dispatch(action.request({ payload }));
  }, [dispatch, action, payload]);
  return <>{isLoading ? <Loading /> : <Frame>{children}</Frame>}</>;
};
export default DataLoader;
