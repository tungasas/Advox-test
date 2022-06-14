import React from "react";
import styled from "styled-components";
import { Select } from "antd";
import { SORT_OPTIONS } from "../constants";

const StyledWrapper = styled.div`
  .ant-select {
    min-width: 180px;
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
