import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  BellOutlined,
  CommentOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Badge, Avatar } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../user/forms/login";
import SignUp from "../user/forms/SignupPage";
import Complaints from "./Pages/Complaint";
import { Registerbill } from "./Pages/RegisterBill";
const { Header, Content, Footer, Sider } = Layout;
export default function DashBoard() {
  const [navigate, setNavigate] = useState("");



  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={(e) => {
            setNavigate(e.key);
          }}
        >
          <Menu.Item
            key="1"
            icon={<Avatar size="small" icon={<UserOutlined />} />}
          >
            <span>Profile</span>
          </Menu.Item>

          <Menu.Item
            key="2"
            icon={
              <Badge count={1} overflowCount={10} size="small">
                <Avatar size="small" icon={<BellOutlined />} />
              </Badge>
            }
          >
            Notifications
          </Menu.Item>

          <Menu.Item
            key="3"
            icon={<Avatar size="small" icon={<CommentOutlined />} />}
          >
            Complaints
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<Avatar size="small" icon={<ScheduleOutlined />} />}
          >
            Register Bill
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" />

        {navigate === "3" ? (
          <Complaints />
        ) : navigate === "4" ? (
          <Registerbill />
        ) : null}

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
