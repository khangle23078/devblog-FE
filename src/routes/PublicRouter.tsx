/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const AdminLayout = lazy(() => import("./../layouts/AdminLayout"));

const Login = lazy(() => import("./../pages/auth/Login"));
const Dashboard = lazy(() => import("./../pages/admin/Dashboard"));
const CategoryList = lazy(() => import("../pages/admin/category/CategoryList"));
const CategoryAdd = lazy(() => import("../pages/admin/category/CategoryAdd"));
const CategoryEdit = lazy(() => import("./../pages/admin/category/CategoryEdit"));
const PostList = lazy(() => import("./../pages/admin/post/PostList"));
const PostAdd = lazy(() => import("./../pages/admin/post/PostAdd"));
const PostEdit = lazy(() => import("./../pages/admin/post/PostEdit"));
const NotFound = lazy(() => import("./../pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "category",
        element: <CategoryList />
      },
      {
        path: 'category/add',
        element: <CategoryAdd />
      },
      {
        path: 'category/edit/:id',
        element: <CategoryEdit />
      },
      {
        path: "post",
        element: <PostList />
      },
      {
        path: "post/add",
        element: <PostAdd />
      },
      {
        path: "post/edit/:id",
        element: <PostEdit />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
