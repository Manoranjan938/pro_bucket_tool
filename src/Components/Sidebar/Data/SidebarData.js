import { MdDashboard } from "react-icons/md";
import {
  IoNotifications,
} from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { BiNotepad } from "react-icons/bi";
import { RiTodoLine } from "react-icons/ri";

export const sidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdDashboard />,
    path: "/dashboard/home"
  },
  {
    id: 3,
    title: "Your Work",
    icon: <GoProject />,
    path: "/dashboard/works"
  },
  {
    id: 4,
    title: "Notes",
    icon: <BiNotepad />,
    path: "/dashboard/notes"
  },
  {
    id: 5,
    title: "Todo",
    icon: <RiTodoLine />,
    path: "/dashboard/todos"
  },
  {
    id: 6,
    title: "Notifications",
    icon: <IoNotifications />,
    path: "/dashboard/notifications",
    notiCount: 5
  },
];
