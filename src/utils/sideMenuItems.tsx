import { AiFillEdit } from "react-icons/ai";
import {
  MdOutlineDashboardCustomize,
  MdOutlinePersonOutline,
} from "react-icons/md";

export const sideMenuItems = [
  {
    key: "1",
    label: "Dashboard",
    icon: <MdOutlineDashboardCustomize className="size-6" />,
  },
  {
    key: "2",
    label: "Profile",
    icon: <MdOutlinePersonOutline className="size-6" />,
  },
  {
    key: "3",
    label: "Blog Write",
    icon: <AiFillEdit className="size-6" />,
  },
];
