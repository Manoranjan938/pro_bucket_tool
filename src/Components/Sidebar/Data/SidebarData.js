import { MdDashboard } from "react-icons/md";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineBug,
} from "react-icons/ai";
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
    id: 2,
    title: "Projects",
    icon: <AiOutlineFundProjectionScreen />,
    path: "/dashboard/projects"
  },
  {
    id: 3,
    title: "Your Work",
    icon: <GoProject />,
    path: "/dashboard/works"
  },
  {
    id: 4,
    title: "Bug Dashboard",
    icon: <AiOutlineBug />,
    path: "/dashboard/bug"
  },
  {
    id: 5,
    title: "Todo",
    icon: <RiTodoLine />,
    path: "/dashboard/todos"
  },
  {
    id: 6,
    title: "Notes",
    icon: <BiNotepad />,
    path: "/dashboard/notes"
  },
];
