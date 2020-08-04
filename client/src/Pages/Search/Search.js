import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import useComponentDidMount from "hooks/useComponentDidMount";
import { searchRequestAction } from "modules/reducers/Search";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const { result: searchResult } = useSelector((state) => state.Search);
  let location = useLocation();
  const { result } = queryString.parse(location.search);
  useComponentDidMount(() => dispatch(searchRequestAction.request({ result })));

  return <div>Search</div>;
};
