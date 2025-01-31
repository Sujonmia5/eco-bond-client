import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import {
  MdOutlineDashboardCustomize,
  MdOutlinePersonOutline,
} from "react-icons/md";

export const sideMenuItems = [
  {
    key: "dashboard",
    label: <Link href={"/dashboard"}>Dashboard</Link>,
    icon: <MdOutlineDashboardCustomize className="size-6" />,
  },
  {
    key: "my-profile",
    label: <Link href={"/my-profile"}>Profile</Link>,
    icon: <MdOutlinePersonOutline className="size-6" />,
  },
  {
    key: "blog-write",
    label: <Link href="/blog-write">Blog Write</Link>,
    icon: <AiFillEdit className="size-6" />,
  },
];
