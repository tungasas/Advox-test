import React, { useContext } from "react";
import styled from "styled-components";
import { Radio } from "antd";
import { LanguageContext } from "../context/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > label {
    font-weight: 600;
    margin-right: 4px;
  }

  .anticon {
    cursor: pointer;
    padding: 2px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .ant-radio-button-wrapper {
    padding: 0 4px;
    border: none !important;
    box-shadow: none !important;
    padding-top: 2px;
    font-weight: bold;
    color: grey;
    &::before {
      display: none;
    }
    &-checked {
      color: #1890ff;
    }
  }
`;

const LanguageSwitcher = () => {
  const { setLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <label>{t("language")}: </label>
      <Radio.Group
        name="language"
        onChange={(e) => setLanguage(e.target.value)}
        defaultValue="english"
      >
        <Radio.Button value="english">EN</Radio.Button>
        <Radio.Button value="vietnamese">VI</Radio.Button>
      </Radio.Group>
    </StyledWrapper>
  );
};

export default LanguageSwitcher;
