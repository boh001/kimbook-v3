import React, { useCallback } from "react";
import { SearchIcon, SearchBar, SearchFrame } from "./SearchBar.style";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showSearchAction } from "modules/reducers/Search";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const dispatch = useDispatch();
  const {
    search: { show },
  } = useSelector((state) => state.Search);
  const showSearch = useCallback(() => dispatch(showSearchAction()), [
    dispatch,
  ]);
  return (
    <SearchFrame>
      <SearchBar show={show} />
      <SearchIcon onClick={showSearch} show={show}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
    </SearchFrame>
  );
};
