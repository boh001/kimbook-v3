import styled from "styled-components";

export const AlbumFrame = styled.div`
  width: 1000px;
  min-height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    grid-auto-rows: 33vw;
  }
`;
