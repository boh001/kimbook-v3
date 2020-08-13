import React, { useCallback } from "react";
import {
  SearchIcon,
  SearchBar,
  SearchFrame,
  SearchReults,
  SearchResult,
} from "./SearchBar.style";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showSearchAction, searchRequestAction } from "modules/reducers/Search";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import UserInfo from "Components/UserInfo/UserInfo";

export default () => {
  const dispatch = useDispatch();
  const {
    search: { show, resultShow },
    results,
  } = useSelector((state) => state.Search);
  const showSearch = useCallback(() => dispatch(showSearchAction()), [
    dispatch,
  ]);
  const showResult = useCallback(
    (e) => {
      const { value: result } = e.target;
      dispatch(searchRequestAction.request({ result }));
    },
    [dispatch]
  );
  return (
    <SearchFrame>
      <SearchBar show={show} onChange={(e) => showResult(e)} />
      <SearchIcon onClick={showSearch} show={show}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
      {resultShow && (
        <SearchReults>
          {results.map((result, key) => {
            const { avatarUrl, nickname } = result;
            return (
              <SearchResult>
                <UserInfo src={avatarUrl} name={nickname} />
              </SearchResult>
            );
          })}
        </SearchReults>
      )}
    </SearchFrame>
  );
};
