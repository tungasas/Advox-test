import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { useTranslation } from "../hooks/useTranslation";

const StyledWrapper = styled.div`
  text-align: center;
  color: #363b43;

  .ant-form-item:last-of-type {
    margin-bottom: 8px;
  }

  input {
    border-radius: 6px;
    text-align: center;
    background: transparent !important;
    border-color: rgba(255, 255, 255, 0.4) !important;
    box-shadow: none !important;
    height: 36px;
    caret-color: rgba(255, 255, 255, 0.8);

    &::placeholder {
      color: hsl(216deg 91% 52%);
    }
  }

  button {
    width: 100%;
    border-radius: 6px;
    height: 36px;
    background: white !important;
    color: hsl(216deg 91% 32%);
    font-weight: 600;
    border: none;

    &:hover,
    &:focus {
      color: hsl(216deg 91% 62%);
    }
  }

  .title {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const AlbumForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <StyledWrapper>
      <div className="title">{t("form.title")}</div>
      <Form name="album" autoComplete="off" form={form} onFinish={handleFinish}>
        <Form.Item
          // label="Album"
          name="album"
          rules={[
            {
              required: true,
              message: t("form.album_required_message"),
            },
          ]}
        >
          <Input placeholder={t("form.album_placeholder")} />
        </Form.Item>
        <Form.Item
          // label="Singer"
          name="singer"
          rules={[
            {
              required: true,
              message: t("form.singer_required_message"),
            },
          ]}
        >
          <Input placeholder={t("form.singer_placeholder")} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {t("form.submit_button")}
          </Button>
        </Form.Item>
      </Form>
    </StyledWrapper>
  );
};

export default AlbumForm;
