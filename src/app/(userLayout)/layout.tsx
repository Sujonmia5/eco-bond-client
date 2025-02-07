import NavbarForUser from "@/components/shared/userNavbar";
import { TChildren } from "@/interface/PropsTypes";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

const userLayout = ({ children }: TChildren) => {
  return (
    <Layout className="min-h-screen ">
      <Layout className="bg-gray-200">
        <Header className="bg-gray-900 sticky  text-white text-xl p-4 top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-2xl font-bold ">
              <span className="text-green-600">Eco</span>Bond
            </div>
            <NavbarForUser />
          </div>
        </Header>
        <Content className="bg-transparent w-full mx-auto min-h-screen">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default userLayout;
