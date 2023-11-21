import { NavLink } from "react-router-dom";
import { menuItem } from "../interfaces/menu";
import { PieChartOutlined, DesktopOutlined, FileOutlined } from "@ant-design/icons";

export const adminMenus: menuItem[] = [
  {
    label: <NavLink to="/admin">Dashboard</NavLink>,
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    label: "Danh mục",
    key: "2",
    icon: <DesktopOutlined />,
    children: [
      {
        label: <NavLink to="/admin/category">Danh sách</NavLink>,
        key: "3",
      },
      {
        label: <NavLink to="/admin/category/add">Thêm mới</NavLink>,
        key: "4",
      },
    ],
  },
  {
    label: "Bài viết",
    key: "5",
    icon: <FileOutlined />,
    children: [
      {
        label: <NavLink to="/admin/post">Danh sách</NavLink>,
        key: "6",
      },
      {
        label: <NavLink to="/admin/post/add">Thêm mới</NavLink>,
        key: "7",
      },
    ],
  },
];
