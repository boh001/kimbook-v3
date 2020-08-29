import React from "react";
import {
  HeaderFrame,
  HeaderSection,
  HeaderFlag,
  HeaderIcon,
} from "./InfoHeader.style";
import ModalFrame from "Components/Modal/ModalFrame/ModalFrame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPenSquare,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import {
  HeaderWriteModalOpenAction,
  HeaderLogoutModalOpenAction,
} from "modules/reducers/Header";
import UserInfo from "Components/UserInfo/UserInfo";
import Write from "Components/Write/Write";
import HeaderLogoutModal from "../HeaderLogoutModal/HeaderLogoutModal";
import SearchBar from "Components/SearchBar/SearchBar";
import { useOpenModal } from "hooks/useModal";

export default () => {
  const { user: loginUser } = useSelector((state) => state.Me);
  const [isOpenWriteModal, openWriteModal] = useOpenModal(
    HeaderWriteModalOpenAction.TYPE
  );
  const [isOpenLogoutModal, openLogoutModal] = useOpenModal(
    HeaderLogoutModalOpenAction.TYPE
  );

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
        <ModalFrame type={HeaderWriteModalOpenAction.TYPE}>
          <Write />
        </ModalFrame>
      ) : null}
      {isOpenLogoutModal ? <HeaderLogoutModal /> : null}
    </>
  );
};
