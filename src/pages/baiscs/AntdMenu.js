import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  HomeOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
const AntdMenu = () => {
  const navigate = useNavigate();
  const changeMenu = (item) => {
    //navigate(item.key);
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-primary">
      <Menu mode="vertical" onClick={changeMenu} style={{ width: "400px" }}>
        <Menu.Item key="/" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="/form" icon={<DashboardOutlined />}>
          Report
        </Menu.Item>
        <Menu.Item icon={<UserAddOutlined />}>User Roles</Menu.Item>
        <Menu.Item icon={<HomeOutlined />}>Mail</Menu.Item>
        <Menu.Item icon={<LogoutOutlined />}>LogOut</Menu.Item>
      </Menu>
    </div>
  );
};

export default AntdMenu;
