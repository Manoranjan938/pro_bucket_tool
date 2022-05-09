import { MdDashboard } from "react-icons/md";
import {
  IoNotifications,
} from "react-icons/io5";
import { GoProject, GoIssueClosed } from "react-icons/go";
import { BiNotepad } from "react-icons/bi";
import { RiTodoLine } from "react-icons/ri";
import { BsBug } from "react-icons/bs";

export const teamSidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdDashboard />,
    path: "/user/team/home"
  },
  {
    id: 3,
    title: "Your Work",
    icon: <GoProject />,
    path: "/user/team/works"
  },
  {
    id: 2,
    title: "Bug",
    icon: <BsBug />,
    path: "/user/personal/bug"
  },
  {
    id: 4,
    title: "Notes",
    icon: <BiNotepad />,
    path: "/user/team/notes"
  },
  {
    id: 7,
    title: "Issues",
    icon: <GoIssueClosed />,
    path: "/user/team/issues"
  },
  {
    id: 5,
    title: "Todo",
    icon: <RiTodoLine />,
    path: "/user/team/todos"
  },
  {
    id: 6,
    title: "Notifications",
    icon: <IoNotifications />,
    path: "/user/team/notifications",
    notiCount: 5
  },
];
