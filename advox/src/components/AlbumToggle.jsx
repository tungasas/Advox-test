import React from "react";
import styled from "styled-components";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";

const StyledWrapper = styled.div`
  .anticon {
    cursor: pointer;
  }
`;

const AlbumToggle = () => {
  return (
    <StyledWrapper>
      <AppstoreOutlined />
      <BarsOutlined />
    </StyledWrapper>
  );
};

export default AlbumToggle;
