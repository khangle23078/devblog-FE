import React, {useState} from "react";
import {Avatar, Breadcrumb, Layout, Menu, theme} from "antd";
import {Outlet} from "react-router-dom";
import {adminMenus} from "../configs/AdminMenus";

const {Header, Content, Footer, Sider} = Layout;

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
          items={adminMenus}
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
