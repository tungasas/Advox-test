import React from "react";
import styled from "styled-components";
import { Select } from "antd";
import { SORT_OPTIONS } from "../constants";

const StyledWrapper = styled.div`
  label {
    margin-right: 8px;
  }
  .ant-select {
    min-width: 160px;
  }
  .ant-select-selector {
    border-radius: 6px !important;
  }
`;

const AlbumSorter = ({ onChange }) => {
  return (
    <StyledWrapper>
      <label>Sort by:</label>
      <Select
        options={SORT_OPTIONS}
        onChange={onChange}
        placeholder="Select an option"
      />
    </StyledWrapper>
  );
};

export default AlbumSorter;
