import React, { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { adminMenus } from "../config/AdminMenu";

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={adminMenus}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="flex items-center justify-end">
          <Link to={'/'}>
            <Button type="primary" className="mr-4">Về trang chủ</Button>
          </Link>
        </Header>
        <Content style={{ margin: "16px" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
