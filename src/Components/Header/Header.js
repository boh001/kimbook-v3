import React, { useCallback } from "react";
import {
  HeaderFrame,
  HeaderSection,
  HeaderFlag,
  HeaderSearch,
  HeaderSearchIcon,
  HeaderSearchBar,
  HeaderIcon,
} from "./Header.style";
import ModalPortal from "Components/ModalPortal";
import Modal from "Components/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faBell,
  faPenSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { modalOpenAction } from "modules/reducers/modal";
import { showSearchAction, headerAction } from "modules/reducers/Header";
import UserInfo from "Components/UserInfo/UserInfo";
import Write from "./Write/Write";
const Header = ({}) => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.Header);
  const modal = useSelector((state) => state.modal);
  const isOpenModal = modal[headerAction.TYPE];
  const openModal = useCallback(() => {
    dispatch(modalOpenAction({ type: headerAction.TYPE }));
  }, [dispatch]);
  const showSearch = useCallback(() => dispatch(showSearchAction()), [
    dispatch,
  ]);
  return (
    <>
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
          <HeaderIcon to="#" onClick={openModal}>
            <FontAwesomeIcon icon={faPenSquare} />
          </HeaderIcon>
        </HeaderSection>
      </HeaderFrame>
      {isOpenModal ? (
        <ModalPortal>
          <Modal type={headerAction.TYPE}>
            <Write />
          </Modal>
        </ModalPortal>
      ) : null}
    </>
  );
};

export default Header;
