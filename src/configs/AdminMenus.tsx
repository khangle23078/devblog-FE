import {menuItem} from "../interfaces/menu";
import {
  PieChartOutlined,
  DesktopOutlined,
  FileOutlined,
} from "@ant-design/icons";

export const adminMenus: menuItem[] = [
  {
    label: <a href="/admin">Danh mục</a>,
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    label: "Danh mục",
    key: "2",
    icon: <DesktopOutlined />,
    children: [
      {
        label: <a href="/admin/category">Danh sách</a>,
        key: "3",
      },
      {
        label: <a href="/admin/category/add">Thêm mới</a>,
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
        label: "Danh sách bài viết",
        key: "6",
      },
      {
        label: "Thêm mới bài viết",
        key: "7",
      },
    ],
  },
];
