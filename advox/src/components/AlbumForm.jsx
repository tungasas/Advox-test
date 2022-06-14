import React from "react";
import { Form, Input, Button } from "antd";

const AlbumForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Form name="album" autoComplete="off" form={form} onFinish={handleFinish}>
      <Form.Item
        label="Album"
        name="album"
        rules={[
          {
            required: true,
            message: "Please input an album!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Singer"
        name="singer"
        rules={[
          {
            required: true,
            message: "Please input a singer!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add to List
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AlbumForm;
