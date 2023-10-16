import {menuItem} from "../interfaces/menu";
import {
  PieChartOutlined,
  DesktopOutlined,
  FileOutlined,
} from "@ant-design/icons";

export const adminMenus: menuItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    label: "Danh mục",
    path: "/category",
    key: "2",
    icon: <DesktopOutlined />,
    children: [
      {
        label: "Danh sách danh mục",
        path: "/category/add",
        key: "3",
      },
      {
        label: "Thêm mới danh mục",
        path: "/category/list",
        key: "4",
      },
    ],
  },
  {
    label: "Bài viết",
    path: "/admin/post",
    key: "5",
    icon: <FileOutlined />,
    children: [
      {
        label: "Danh sách bài viết",
        path: "/post/list",
        key: "6",
      },
      {
        label: "Thêm mới bài viết",
        path: "/post/add",
        key: "7",
      },
    ],
  },
];
