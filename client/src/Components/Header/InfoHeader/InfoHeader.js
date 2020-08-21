import React, { useCallback } from "react";
import {
  HeaderFrame,
  HeaderSection,
  HeaderFlag,
  HeaderIcon,
} from "./InfoHeader.style";
import ModalPortal from "Components/ModalPortal";
import ModalFrame from "Components/Modal/ModalFrame/ModalFrame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPenSquare,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { modalOpenAction } from "modules/reducers/modal";
import {
  HeaderWriteModalOpenAction,
  HeaderLogoutModalOpenAction,
} from "modules/reducers/Header";
import UserInfo from "Components/UserInfo/UserInfo";
import Write from "Components/Write/Write";
import HeaderLogoutModal from "../HeaderLogoutModal/HeaderLogoutModal";
import SearchBar from "Components/SearchBar/SearchBar";

export default () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const { user: loginUser } = useSelector((state) => state.Me);
  const isOpenWriteModal = modal[HeaderWriteModalOpenAction.TYPE];
  const isOpenLogoutModal = modal[HeaderLogoutModalOpenAction.TYPE];
  const openWriteModal = useCallback(() => {
    dispatch(modalOpenAction({ type: HeaderWriteModalOpenAction.TYPE }));
  }, [dispatch]);
  const openLogoutModal = useCallback(() => {
    dispatch(modalOpenAction({ type: HeaderLogoutModalOpenAction.TYPE }));
  }, [dispatch]);
  return (
    <>
      <HeaderFrame>
        <HeaderSection>
          <HeaderFlag>KIMBOOK</HeaderFlag>
          <UserInfo
            userId={loginUser._id}
            src={loginUser.avatarUrl}
            name={loginUser.nickname}
            color={"white"}
            size={"medium"}
          />
        </HeaderSection>
        <HeaderSection>
          <HeaderIcon to="/me">
            <FontAwesomeIcon icon={faHome} />
          </HeaderIcon>
          <SearchBar />
          <HeaderIcon to="#" onClick={openWriteModal}>
            <FontAwesomeIcon icon={faPenSquare} />
          </HeaderIcon>
          <HeaderIcon to="#" onClick={openLogoutModal}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </HeaderIcon>
        </HeaderSection>
      </HeaderFrame>
      {isOpenWriteModal ? (
        <ModalPortal>
          <ModalFrame type={HeaderWriteModalOpenAction.TYPE}>
            <Write />
          </ModalFrame>
        </ModalPortal>
      ) : null}
      {isOpenLogoutModal ? (
        <ModalPortal>
          <ModalFrame type={HeaderLogoutModalOpenAction.TYPE}>
            <HeaderLogoutModal />
          </ModalFrame>
        </ModalPortal>
      ) : null}
    </>
  );
};
