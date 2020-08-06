import React, { useCallback } from "react";
import {
  HeaderFrame,
  HeaderSection,
  HeaderFlag,
  HeaderIcon,
} from "./Header.style";
import ModalPortal from "Components/ModalPortal";
import Modal from "Components/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBell, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { modalOpenAction } from "modules/reducers/modal";
import { writeAction } from "modules/reducers/Write";
import UserInfo from "Components/UserInfo/UserInfo";
import Write from "Components/Write/Write";
import SearchBar from "Components/SearchBar/SearchBar";
import PropTypes from "prop-types";

const Header = ({ src, name }) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const isOpenModal = modal[writeAction.TYPE];
  const openModal = useCallback(() => {
    dispatch(modalOpenAction({ type: writeAction.TYPE }));
  }, [dispatch]);
  return (
    <>
      <HeaderFrame>
        <HeaderSection>
          <HeaderFlag>KIMBOOK</HeaderFlag>
          <UserInfo src={src} name={name} color={"white"} size={"medium"} />
        </HeaderSection>
        <HeaderSection>
          <HeaderIcon to="/me">
            <FontAwesomeIcon icon={faHome} />
          </HeaderIcon>
          <SearchBar />
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
          <Modal type={writeAction.TYPE}>
            <Write />
          </Modal>
        </ModalPortal>
      ) : null}
    </>
  );
};
Header.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
Header.defaultProps = {
  src:
    "https://images.unsplash.com/photo-1594599304267-88bdc2233be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  name: "Sara",
};
export default Header;
