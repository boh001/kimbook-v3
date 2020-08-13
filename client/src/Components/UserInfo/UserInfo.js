import React from "react";
import { UserInfoFrame, UserInfoAvatar, UserInfoName } from "./UserInfo.style";
import PropTypes from "prop-types";
import df from "images/default.jpeg";

const UserInfo = ({ userId, src, name, size, color }) => {
  console.log();
  return (
    <UserInfoFrame>
      <UserInfoAvatar src={src ? src : df} size={size} />
      <UserInfoName to={`/profile/${userId}`} size={size} color={color}>
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

export default UserInfo;
