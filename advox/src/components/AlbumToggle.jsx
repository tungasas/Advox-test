import React from "react";
import styled from "styled-components";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Radio } from "antd";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  .anticon {
    cursor: pointer;
    padding: 2px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .ant-radio-button-wrapper {
    padding: 0 2px;
    border: none !important;
    box-shadow: none !important;
    padding-top: 4px;
    &::before {
      display: none;
    }
  }
`;

const AlbumToggle = ({ onChange }) => {
  return (
    <StyledWrapper>
      <Radio.Group onChange={onChange} defaultValue="grid">
        <Radio.Button value="grid">
          <AppstoreOutlined />
        </Radio.Button>
        <Radio.Button value="list">
          <BarsOutlined />
        </Radio.Button>
      </Radio.Group>
    </StyledWrapper>
  );
};

export default AlbumToggle;
