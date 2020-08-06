import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import useComponentDidMount from "hooks/useComponentDidMount";
import { searchRequestAction } from "modules/reducers/Search";
import { useDispatch, useSelector } from "react-redux";
import Header from "Components/Header/Header";
import Loading from "Components/Loading/Loading";
import {
  Frame,
  SearchResult,
  ResultUser,
  UserImg,
  UserInfo,
  InfoOptions,
  UserFollow,
  InfoOption,
} from "./Search.style";

export default () => {
  const dispatch = useDispatch();
  const { result: searchResult } = useSelector((state) => state.Search);
  let location = useLocation();
  const { result } = queryString.parse(location.search);
  useComponentDidMount(() => dispatch(searchRequestAction.request({ result })));

  return (
    <Frame>
      <Header />
      <SearchResult>검색 결과</SearchResult>
      <ResultUser>
        <UserInfo>
          <UserImg />
          <InfoOptions>
            <InfoOption>이름: 김상현</InfoOption>
            <InfoOption>아이디: boh001</InfoOption>
            <InfoOption>이메일: boh0012@naver.com</InfoOption>
            <InfoOption>함께 아는 친구 2명</InfoOption>
          </InfoOptions>
        </UserInfo>
      </ResultUser>
      <ResultUser>
        <UserInfo>
          <UserImg />
          <InfoOptions>
            <InfoOption>이름: 김상현</InfoOption>
            <InfoOption>아이디: boh001</InfoOption>
            <InfoOption>이메일: boh0012@naver.com</InfoOption>
            <InfoOption>함께 아는 친구 2명</InfoOption>
          </InfoOptions>
        </UserInfo>
      </ResultUser>
      <ResultUser>
        <UserInfo>
          <UserImg />
          <InfoOptions>
            <InfoOption>이름: 김상현</InfoOption>
            <InfoOption>아이디: boh001</InfoOption>
            <InfoOption>이메일: boh0012@naver.com</InfoOption>
            <InfoOption>함께 아는 친구 2명</InfoOption>
          </InfoOptions>
        </UserInfo>
      </ResultUser>
    </Frame>
  );
};
