import React, {useState} from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type {MenuProps} from "antd";
import {Avatar, Breadcrumb, Layout, Menu, theme} from "antd";
import {Outlet} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("Danh mục", "2", <DesktopOutlined />, [
    getItem(<a href="/admin/category">Danh sách danh mục</a>, "3"),
    getItem("Thêm mới danh mục", "4"),
  ]),
  getItem("Bài viết", "sub1", <FileOutlined />, [
    getItem("Danh sách bài viết", "5"),
    getItem("Thêm mới bài viết", "6"),
  ]),
  getItem("Tài khoản", "9", <UserOutlined />),
];

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <Layout style={{minHeight: "100vh"}}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{padding: 0, background: colorBgContainer}}
          className="flex justify-end items-center">
          <Avatar icon={<UserOutlined />} className="mr-4" />
        </Header>
        <Content style={{margin: "0 16px"}}>
          <Breadcrumb style={{margin: "16px 0"}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Outlet />
        </Content>
        <Footer style={{textAlign: "center"}}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
