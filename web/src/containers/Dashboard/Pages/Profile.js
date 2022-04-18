import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Card, notification } from "antd";
import axios from "axios";
import NotificationHelper from "../../../middleware/notification";
export function Profile({ role }) {
  const [userData, setUserData] = useState([]);
  const [form] = Form.useForm();

  let token = localStorage.getItem("x-auth");

  const onFinish = async (values) => {
    const { firstName, lastName, email } = values;

    const formData = {
      firstName,
      lastName,
      email,
      role,
    };
    console.log(formData);

    const resData = await axios.put(
      "http://localhost:4000/user/item",
      formData,
      {
        headers: { "x-auth": token },
      }
    );

    NotificationHelper.getInstance().success('update profile successfully')

   
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const resData = await axios.post(
        "http://localhost:4000/user/profile",
        { role },
        {
          headers: { "x-auth": token },
        }
      );

      form.setFieldsValue({
        firstName: resData.data.firstName,
        email: resData.data.email,
        lastName: resData.data.lastName,
      });
    };
    fetchProfile();
  }, []);

  return (
    <>
      <div style={{ alignContent: "center", justifyContent: "center" }}>
        <Card
          style={{ width: "30rem", marginLeft: "30rem", marginTop: "10rem" }}
        >
          <Form
            name="basic"
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="firstName"
              name="firstName"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="lastName"
              name="lastName"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="email"
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                update
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
}
