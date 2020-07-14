import React from "react";
import { UserInfoFrame, UserInfoAvatar, UserInfoName } from "./UserInfo.style";
import PropTypes from "prop-types";

const UserInfo = ({ src, name, size, color }) => {
  return (
    <UserInfoFrame>
      <UserInfoAvatar src={src} size={size} />
      <UserInfoName size={size} color={color}>
        {name}
      </UserInfoName>
    </UserInfoFrame>
  );
};
UserInfo.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
UserInfo.defaultProps = {
  src:
    "https://images.unsplash.com/photo-1594599304267-88bdc2233be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  name: "Sara",
  size: "medium",
  color: "white",
};
export default UserInfo;
