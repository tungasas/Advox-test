import React, { useContext } from "react";
import styled from "styled-components";
import { Select } from "antd";
import { SORT_OPTIONS } from "../constants";
import { useTranslation } from "../hooks/useTranslation";
import { LanguageContext } from "../context/LanguageContext";

const StyledWrapper = styled.div`
  label {
    margin-right: 8px;
  }
  .ant-select {
    min-width: 180px;
  }
  .ant-select-selector {
    border-radius: 6px !important;
  }
`;

const AlbumSorter = ({ onChange }) => {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <label>{t("list.sort_label")}</label>
      <Select
        options={SORT_OPTIONS[language]}
        onChange={onChange}
        placeholder={t("list.sort_placeholder")}
      />
    </StyledWrapper>
  );
};

export default AlbumSorter;
