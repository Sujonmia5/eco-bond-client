"use client";
import { logout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { Avatar, Button, Dropdown, Image, Menu, MenuProps } from "antd";

import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

const NavbarForUser = () => {
  const dispacth = useAppDispatch();
  const menuItems = [
    {
      key: "",
      label: "home",
    },
    {
      key: "news-feed",
      label: "news feed",
    },
    {
      key: "blog",
      label: "blog",
    },
    {
      key: "services",
      label: "services",
    },
  ];

  const items: MenuProps["items"] = [
    {
      key: "2",
      label: (
        <Link
          className="flex items-center justify-start gap-x-2"
          href={"/dashboard"}
        >
          <FaUser /> Dashboard
        </Link>
      ),
    },
    {
      key: "1",
      label: (
        <Link
          className="flex items-center justify-start gap-x-2"
          href={"/my-profile"}
        >
          <FaUser /> Profile
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Button
          onClick={() => dispacth(logout())}
          type="primary"
          shape="round"
          icon={<BiLogOut />}
          size="middle"
        >
          Log out
        </Button>
      ),
    },
  ];
  return (
    <div className="flex items-center justify-between">
      <Menu
        className="bg-transparent hidden sm:flex"
        mode="horizontal"
        style={{ flex: "2", justifyContent: "end", color: "white" }}
        defaultSelectedKeys={["home"]}
      >
        {menuItems.map((item) => (
          <Menu.Item
            key={item.key}
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              className="text-base font-medium capitalize"
              href={`/${item.key}`}
            >
              {item.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>

      <Dropdown menu={{ items }} placement="bottomLeft" arrow>
        <Avatar
          size={40}
          className="bg-black"
          icon={
            <Image
              height={50}
              width={50}
              alt="profile-photo"
              className="object-cover object-center rounded-full"
              src="https://tinypng.com/images/social/website.jpg"
            />
          }
        ></Avatar>
      </Dropdown>
    </div>
  );
};

export default NavbarForUser;
