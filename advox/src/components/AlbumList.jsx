import React from "react";
import styled from "styled-components";
import AlbumCard from "./AlbumCard";

const StyledWrapper = styled.div``;

const AlbumList = ({ albums, onRemove, onClickBest }) => {
  return (
    <StyledWrapper>
      <div className="title">Album List</div>
      <div className="list">
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
            onRemove={onRemove}
            onClickBest={onClickBest}
          />
        ))}
      </div>
    </StyledWrapper>
  );
};

export default AlbumList;
