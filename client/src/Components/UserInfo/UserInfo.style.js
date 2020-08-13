import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserInfoFrame = styled.div`
  display: flex;
  align-items: center;
`;
export const UserInfoAvatar = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: ${(props) => {
    switch (props.size) {
      case "large":
        return "70px";
      case "medium":
        return "55px";
      case "small":
        return "40px";
      default:
        return "55px";
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case "large":
        return "70px";
      case "medium":
        return "55px";
      case "small":
        return "40px";
      default:
        return "55px";
    }
  }};
  object-fit: cover;
  border-radius: 50%;
  @media screen and (max-width: 1024px) {
    width: ${(props) => {
      switch (props.size) {
        case "large":
          return "70px";
        case "medium":
          return "55px";
        case "small":
          return "30px";
        default:
          return "55px";
      }
    }};
    height: ${(props) => {
      switch (props.size) {
        case "large":
          return "70px";
        case "medium":
          return "55px";
        case "small":
          return "30px";
        default:
          return "55px";
      }
    }};
  }
  @media screen and (max-width: 764px) {
    width: ${(props) => {
      switch (props.size) {
        case "large":
          return "50px";
        case "medium":
          return "30px";
        case "small":
          return "20px";
        default:
          return "55px";
      }
    }};
    height: ${(props) => {
      switch (props.size) {
        case "large":
          return "50px";
        case "medium":
          return "30px";
        case "small":
          return "20px";
        default:
          return "55px";
      }
    }};
  }
`;
export const UserInfoName = styled(Link)`
  color: ${(props) => props.color};
  font-size: ${(props) => {
    switch (props.size) {
      case "large":
        return "55px";
      case "medium":
        return "40px";
      case "small":
        return "35px";
      default:
        return "40px";
    }
  }};
  @media screen and (max-width: 1024px) {
    font-size: ${(props) => {
      switch (props.size) {
        case "large":
          return "40px";
        case "medium":
          return "30px";
        case "small":
          return "25px";
        default:
          return "30px";
      }
    }};
  }
  @media screen and (max-width: 764px) {
    font-size: ${(props) => {
      switch (props.size) {
        case "large":
          return "30px";
        case "medium":
          return "20px";
        case "small":
          return "15px";
        default:
          return "20px";
      }
    }};
  }
  padding-left: 0.5em;
`;
