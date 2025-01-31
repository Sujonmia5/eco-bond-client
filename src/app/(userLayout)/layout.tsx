import NavbarForUser from "@/components/shared/userNavbar";
import { TChildren } from "@/interface/PropsTypes";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

const userLayout = ({ children }: TChildren) => {
  return (
    <Layout className="min-h-screen">
      <Layout>
        <Header className="bg-gray-900 text-white text-xl p-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-2xl font-bold ">
              <span className="text-green-600">Eco</span>Bond
            </div>
            <NavbarForUser />
          </div>
        </Header>
        <Content className=" bg-gray-100 max-w-7xl mx-auto min-h-screen">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default userLayout;
