"use client";

import { Button, Layout, Menu } from "antd";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { sideMenuItems } from "@/utils/sideMenuItems";
import { usePathname } from "next/navigation";

const { Sider } = Layout;

const Sidebar = () => {
  const pathname = usePathname().split("/");
  console.log(pathname);
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="h-screen !bg-[#001529] sticky top-0"
      >
        <div className="text-white text-center py-4 font-bold">
          {collapsed ? (
            <>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                className="text-lg text-white !hover:text-gray-400"
              />
            </>
          ) : (
            <div className="w-full flex items-center justify-around">
              <div className="text-2xl ">
                <span className="text-green-600">Eco</span>Bond
              </div>
              <Button
                type="text"
                variant="text"
                icon={
                  collapsed ? (
                    <MenuUnfoldOutlined
                      style={{
                        fontSize: "20px",
                        color: "white",
                      }}
                    />
                  ) : (
                    <MenuFoldOutlined />
                  )
                }
                onClick={() => setCollapsed(!collapsed)}
                className="text-xl text-white !hover:text-gray-400"
              />
            </div>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          activeKey={pathname[1]}
          defaultSelectedKeys={["1"]}
          items={sideMenuItems}
        />
      </Sider>
    </>
  );
};

export default Sidebar;
