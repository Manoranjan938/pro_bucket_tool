import { MdDashboard } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { BiNotepad, BiUserPlus } from "react-icons/bi";
import { RiTodoLine } from "react-icons/ri";

export const sidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdDashboard />,
    path: "/user/personal/home",
  },
  {
    id: 3,
    title: "Your Work",
    icon: <GoProject />,
    path: "/user/personal/works",
  },
  {
    id: 4,
    title: "Notes",
    icon: <BiNotepad />,
    path: "/user/personal/notes",
  },
  {
    id: 5,
    title: "Todo",
    icon: <RiTodoLine />,
    path: "/user/personal/todos",
  },
  {
    id: 6,
    title: "Notifications",
    icon: <IoNotifications />,
    path: "/user/personal/notifications",
    notiCount: 5,
  },
  {
    id: 7,
    title: "Add User",
    icon: <BiUserPlus />,
    path: "/user/personal/new-user",
  },
];
