import styled from "styled-components";

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
        return "30px";
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
      }
    }};
  }
  @media screen and (max-width: 700px) {
    width: ${(props) => {
      switch (props.size) {
        case "large":
          return "50px";
        case "medium":
          return "30px";
        case "small":
          return "20px";
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
      }
    }};
  }
`;
export const UserInfoName = styled.span`
  color: ${(props) => props.color};
  padding-left: 1rem;
  font-size: ${(props) => {
    switch (props.size) {
      case "large":
        return "55px";
      case "medium":
        return "30px";
      case "small":
        return "30px";
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
          return "20px";
      }
    }};
  }
  @media screen and (max-width: 700px) {
    font-size: ${(props) => {
      switch (props.size) {
        case "large":
          return "30px";
        case "medium":
          return "20px";
        case "small":
          return "10px";
      }
    }};
  }
`;
