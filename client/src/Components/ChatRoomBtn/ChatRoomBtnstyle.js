import styled from "styled-components";
import colors from "utils/constants/colors";
import { flexCenter } from "utils/constants/css";

export const Frame = styled.div`
  width: ${(props) => (props.active ? "1000px" : "100px")};
  height: ${(props) => (props.active ? "1000px" : "100px")};
  border-radius: 10px;
  background-color: ${colors.mainBlack};
  color: ${colors.mainGreen};
  ${flexCenter};
  font-size: 50px;
  position: fixed;
  bottom: 2em;
  right: 2em;
  transition: 0.2s linear;
  z-index: 2;
  cursor: pointer;
`;
export const ChatFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const CloseBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${colors.mainGreen};
  border: 1px solid ${colors.mainGreen};
  font-size: 20px;
  border-radius: 10px;
  padding: 0.5em 0.75em;
  @media screen and (max-width: 764px) {
    font-size: 10px;
  }
`;
export const ChatHeader = styled.div`
  width: 100%;
  height: 10%;
  background-color: red;
`;
export const ChatMain = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
`;
export const ChatRoomLists = styled.div`
  width: 30%;
  height: 100%;
  background-color: blue;
`;
export const ChatRoomMain = styled.div`
  width: 70%;
  height: 100%;
`;
export const MsgFrame = styled.div`
  width: 100%;
  height: 90%;
  padding: 1em;
`;
