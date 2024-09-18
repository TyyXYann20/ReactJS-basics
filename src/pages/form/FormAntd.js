import React from "react";
import { Button, Form, Input } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const FormAntd = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      <Form
        layout="vertical"
        name="loginform"
        initialValues={{ remember: true }}
        style={{ width: "400px" }}
      >
        <h1>Login Form</h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: "Please Fill in username!" },
            { type: "email", message: "Invalid email format" },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please Fill in password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button
            block
            htmlType="submit"
            type="primary"
            icon={<LoginOutlined />}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormAntd;
