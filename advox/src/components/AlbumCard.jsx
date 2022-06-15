import React from "react";
import styled from "styled-components";
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons";

const StyledWrapper = styled.div`
  background: hsl(2.76, 78%, 92%);
  position: relative;
  text-align: center;
  padding: 16px;
  padding-bottom: 12px;
  border-radius: 4px;
  border: 2px solid ${(props) => (props.isBest ? "red" : "transparent")};

  .album {
    &-image {
      width: 100px;
      height: 100px;
      background: hsl(2.76, 78%, 65%);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
      z-index: 1;
      margin: 0 auto;
      border-radius: 4px;
    }
    &-name {
      font-weight: 600;
      font-size: 16px;
      padding-top: 6px;
    }
    &-info {
      z-index: 1;
    }
    &-actions {
      span {
        margin: 0 4px;
        svg {
          width: 16px;
          height: 16px;
        }
      }
      .heart {
        color: ${(props) => (props.isBest ? "red" : "inherit")};
      }
    }
  }
`;

const AlbumCard = ({ album = {}, onRemove, onClickBest }) => {
  return (
    <StyledWrapper isBest={album?.best}>
      <div className="album-image"></div>
      <div className="album-info">
        <div className="album-name">{album?.album}</div>
        <div className="album-singer">{album?.singer}</div>
        <div className="album-actions">
          <DeleteOutlined onClick={() => onRemove(album?.id)} />
          <HeartOutlined
            className="heart"
            onClick={() => onClickBest(album?.id)}
          />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default AlbumCard;
