import Sidebar from "@/components/shared/Sidebar";
import NavbarForUser from "@/components/shared/userNavbar";
import { TChildren } from "@/interface/PropsTypes";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

import React from "react";

const DashboardLayout = ({ children }: TChildren) => {
  return (
    <Layout className="min-h-screen">
      <Sidebar />
      <Layout>
        <Header className="bg-gray-900 text-white text-xl p-4 sticky top-0 z-50">
          <NavbarForUser />
        </Header>
        <Content className=" bg-gray-100 max-w-7xl mx-auto min-h-screen">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
