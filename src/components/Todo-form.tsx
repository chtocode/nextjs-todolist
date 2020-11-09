import { Button, Form, Input, Select } from "antd";
import React from "react";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export interface TodoValues {
  description: string;
  category: number;
  content: string;
}

export interface TodoFromProps {
  onSubmit: (values: TodoValues) => void;
}

function TodoForm(props: TodoFromProps) {
  const onFinishFailed = (errorInfo: any) => {
    console.error("Failed:", errorInfo); // 
  };

  return (
    <Form {...layout} name="basic" onFinish={props.onSubmit} onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Description"
        name="description"
        labelCol={{ span: 10 }}
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        labelCol={{ span: 10 }}
        rules={[{ required: true, message: "Please select your category!" }]}
      >
        <Select>
          <Select.Option value={1}>HTML</Select.Option>
          <Select.Option value={2}>Css</Select.Option>
          <Select.Option value={3}>JavaScript</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Content"
        labelCol={{ span: 10 }}
        name="content"
        rules={[{ required: true, message: "Please input your content!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default TodoForm;
