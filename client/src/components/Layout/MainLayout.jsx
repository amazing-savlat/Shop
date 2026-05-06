import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import items from "./NavItem";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const MainLayout = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[{ title: "Home" }, { title: "product" }]}
        />
        <div
          style={{
            backgroundColor: "rgb(255, 249, 241)",
            minHeight: "77vh",
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};
export default MainLayout;
