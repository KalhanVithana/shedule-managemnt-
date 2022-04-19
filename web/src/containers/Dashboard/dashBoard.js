import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  BellOutlined,
  CommentOutlined,
  ScheduleOutlined,
  DashboardOutlined
} from "@ant-design/icons";
import { Badge, Avatar } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../user/forms/login";
import SignUp from "../user/forms/SignupPage";
import Complaints from "./Pages/Complaint";

import { Registerbill } from "./Pages/RegisterBill";
import { Notification } from "./Pages/Notification";
import { useDispatch, useSelector } from "react-redux";
import { Dashboard } from "./Pages/dashboard";
import { logoutRequest } from "../user/action/logoutAction";
import { Customerdashbord } from "./Pages/customerDashbord";
import { Profile } from "./Pages/Profile";
const { Header, Content, Footer, Sider } = Layout;
export default function DashBoard() {
  const userRole = useSelector((state) => state.loginReducer.login_data.user);
  const [navigate, setNavigate] = useState("");

  const dispatch = useDispatch();

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
          {userRole.role ==-'admin' ?  <Menu.Item
            key="1"
            icon={
              <Avatar
              className="dashboardBackground backGround"
                size="medium"
                icon={<DashboardOutlined className="Icon" />}
                
              />
            }
          >
            <span>Dashboard</span>
          </Menu.Item> :null}

          <Menu.Item
            key="2"
            icon={<Avatar  className="customerBackground backGround"  size="medium" icon={<UserOutlined className="Icon" />} />}
          >
            <span>Profile</span>
          </Menu.Item>

          <Menu.Item
            key="3"
            icon={
              <Badge count={1} overflowCount={10} size="small" className="badge">
                <Avatar  className="notificationBackground backGround" size="medium" icon={<BellOutlined className="Icon" />} />
              </Badge>
            }
          >
            Notifications
          </Menu.Item>

          {userRole.role === "customer" ? (
            <>
              <Menu.Item
                key="4"
                icon={<Avatar  className="complaintsBackground backGround" size="medium" icon={<CommentOutlined className="Icon" />} />}
              >
                Complaints
              </Menu.Item>
              <Menu.Item
                key="5"
                icon={<Avatar  className="registerBackground backGround"  size="medium" icon={<ScheduleOutlined className="Icon" />} />}
              >
                Register Bill
              </Menu.Item>
            </>
          ) : null}

          <Menu.Item
            icon={<Avatar className="logoutBackground backGround"  size="medium" icon={<ScheduleOutlined  className="Icon"/>} />}
            onClick={() => {
              localStorage.setItem("x-auth", "");

              dispatch(logoutRequest("logout"));
            }}
          >
            Log Out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {console.log(userRole)}
        {navigate === "1" ? (
          userRole.role === 'admin' ?  <Dashboard /> : null
        ): navigate === "2" ? (
          <Profile role={userRole.role} />
        ) : navigate === "3" ? (
          <Notification role={userRole.role} />
        ) : navigate === "4" ? (
          <Complaints />
        ) : navigate === "5" ? (
          <Registerbill />
        ) : (
         userRole.role === 'admin' ?  <Dashboard /> : <Profile role={userRole.role}/>
        )}

       
      </Layout>
    </Layout>
  );
}
