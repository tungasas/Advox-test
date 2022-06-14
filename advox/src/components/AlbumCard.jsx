import React from "react";
import styled from "styled-components";
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons";

const StyledWrapper = styled.div``;

const AlbumCard = ({ album = {}, onRemove, onClickBest }) => {
  return (
    <StyledWrapper>
      <div className="album-image"></div>
      <div className="album-info">
        <div className="album-name">{album?.album}</div>
        <div className="album-singer">{album?.singer}</div>
        <div className="album-actions">
          <DeleteOutlined onClick={() => onRemove(album?.id)} />
          <HeartOutlined onClick={() => onClickBest(album?.id)} />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default AlbumCard;
