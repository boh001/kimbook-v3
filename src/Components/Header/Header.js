import React, { useCallback } from "react";
import {
  HeaderFrame,
  HeaderSection,
  HeaderFlag,
  HeaderSearch,
  HeaderSearchIcon,
  HeaderSearchBar,
  HeaderUser,
  UserAvatar,
  UserName,
  HeaderIcon,
} from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faBell,
  faPenSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { showSearchAction } from "modules/reducers/Header";
import UserInfo from "Components/UserInfo/UserInfo";

const Header = ({}) => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.Header);
  const showSearch = useCallback(() => dispatch(showSearchAction()), [
    dispatch,
  ]);
  return (
    <HeaderFrame>
      <HeaderSection>
        <HeaderFlag>KIMBOOK</HeaderFlag>
        <UserInfo />
      </HeaderSection>
      <HeaderSection>
        <HeaderIcon to="#">
          <FontAwesomeIcon icon={faHome} />
        </HeaderIcon>
        <HeaderSearch>
          <HeaderSearchBar show={show} />
          <HeaderSearchIcon onClick={showSearch} show={show}>
            <FontAwesomeIcon icon={faSearch} />
          </HeaderSearchIcon>
        </HeaderSearch>
        <HeaderIcon to="#">
          <FontAwesomeIcon icon={faBell} />
        </HeaderIcon>
        <HeaderIcon to="#">
          <FontAwesomeIcon icon={faPenSquare} />
        </HeaderIcon>
      </HeaderSection>
    </HeaderFrame>
  );
};

export default Header;
