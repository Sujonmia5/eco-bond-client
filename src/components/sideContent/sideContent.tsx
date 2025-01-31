/* eslint-disable @next/next/no-img-element */
"use client";
import { Menu } from "antd";
import {
  HomeOutlined,
  BellOutlined,
  BookOutlined,
  TeamOutlined,
  StarOutlined,
  UserOutlined,
  SearchOutlined,
  MessageOutlined,
  ThunderboltOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const SideContent = () => {
  const menuItems = [
    { name: "Home", icon: <HomeOutlined />, link: "/" },
    { name: "Explore", icon: <SearchOutlined />, link: "/explore" },
    { name: "Notifications", icon: <BellOutlined />, link: "/notifications" },
    { name: "Messages", icon: <MessageOutlined />, link: "/messages" },
    { name: "Grok", icon: <StarOutlined />, link: "/grok" },
    { name: "Bookmarks", icon: <BookOutlined />, link: "/bookmarks" },
    { name: "Communities", icon: <TeamOutlined />, link: "/communities" },
    { name: "Premium", icon: <ThunderboltOutlined />, link: "/premium" },
    { name: "Verified Orgs", icon: <StarOutlined />, link: "/verified-orgs" },
    { name: "Profile", icon: <UserOutlined />, link: "/profile" },
    { name: "More", icon: <EllipsisOutlined />, link: "/more" },
  ];

  return (
    <div>
      <div className="h-full w-full bg-white border-none">
        <div className="flex flex-col h-full">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            className=" flex-1 h-svh bg-white !text-black"
          >
            {menuItems.map((item) => (
              <Menu.Item
                key={item.name}
                className="[&>.ant-menu-item-active]:!text-white hover:bg-green-500 hover:text-white"
                icon={item.icon}
              >
                <div className="flex items-center space-x-4  transition-transform duration-300 font-medium p-2 rounded-lg cursor-pointer">
                  {item.name}
                </div>
              </Menu.Item>
            ))}
          </Menu>
          <div className="p-4 border-t bg- mt-36">
            <div className="flex items-center">
              <img
                src="https://placehold.co/40"
                alt="Profile"
                className="rounded-full"
              />
              <div className="ml-2">
                <p className="font-semibold">Md Sujon Mia</p>
                <p className="text-sm text-gray-500">@SujonProgrammer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideContent;
