import React from "react";
import styled, { css } from "styled-components";
import AlbumCard from "./AlbumCard";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  ${(props) =>
    props.mode === "list" &&
    css`
      grid-template-columns: 1fr !important;
    `}
`;

const AlbumList = ({ albums, onRemove, onClickBest, mode }) => {
  return (
    <StyledWrapper mode={mode}>
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          album={album}
          onRemove={onRemove}
          onClickBest={onClickBest}
        />
      ))}
    </StyledWrapper>
  );
};

export default AlbumList;
