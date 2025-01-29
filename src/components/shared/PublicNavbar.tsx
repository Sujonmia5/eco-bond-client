"use client";
import Link from "next/link";
import { Menu } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import logo from "@/assets/image/logo-lt.png";
import Image from "next/image";
import { RiBloggerLine, RiContactsBookLine } from "react-icons/ri";

const PublicNavbar = () => {
  const menuItems = [
    {
      label: "Home",
      key: "home",
      icon: <HomeOutlined className="size-4" />,
      link: "/",
    },

    {
      label: "Blog",
      key: "blog",
      icon: <RiBloggerLine className="size-4" />,
      link: "/blog",
    },
    {
      label: "About",
      key: "about",
      icon: <InfoCircleOutlined className="size-4" />,
      link: "/about",
    },
    {
      label: "Services",
      key: "services",
      icon: <AppstoreOutlined className="size-4" />,
      link: "/services",
    },
    {
      label: "Contact",
      key: "contact",
      icon: <RiContactsBookLine className="size-4" />,
      link: "/contact",
    },
    {
      label: "Login",
      key: "login",
      link: "/login",
    },
    {
      label: "Signup",
      key: "signup",
      link: "/signup",
    },
  ];
  return (
    <>
      <Header
        className="relative z-50 bg-white/10"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="text-white flex-1">
          <Link
            href="/"
            className="flex items-center justify-start gap-x-2 text-2xl font-bold hover:text-primary"
          >
            <Image src={logo} alt="Eco-bond" height={35} />
            <h2>
              {" "}
              Eco-<span className="text-green-500">B</span>ond
            </h2>
          </Link>
        </div>
        <Menu
          className="bg-transparent"
          mode="horizontal"
          style={{ flex: "2", justifyContent: "end", color: "white" }}
          defaultSelectedKeys={["home"]}
        >
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item?.icon}
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link className="text-base font-medium" href={item.link}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    </>
  );
};

export default PublicNavbar;
