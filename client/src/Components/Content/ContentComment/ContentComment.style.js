import styled from "styled-components";
import colors from "utils/constants/colors";
import { Link } from "react-router-dom";

export const CommentFrame = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 0.5em;
`;
export const CommentUser = styled(Link)`
  display: inline-block;
  margin-right: 0.5em;
  color: ${colors.mainGreen};
`;
export const CommentText = styled.p`
  display: inline-block;
  text-indent: ${(props) => `${props.ident * 1.3}px`};
`;
