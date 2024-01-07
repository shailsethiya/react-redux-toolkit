import React from "react";
import { Navigate } from "react-router-dom";

import Layout from "../components/layout/Layout";

import ProtectedRoute from "./ProtectedRoute";

const Dashboard = React.lazy(() => import("../module/dashboard/Dashboard"));
const Login = React.lazy(() => import("../module/auth/login/Login"));
const TodoPage = React.lazy(() => import("../module/todo/Todo"));
const UserPage = React.lazy(() => import("../module/user/user"));

export const PATHS = {
  DEFAULT: "/",
  ANY: "*",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  TODO: "/todo",
  USER: "/user",
  DASHBOARD: "/dashboard",
  PRODUCTS: "/products",
};

export const getRoutes = (isLoggedIn) => [
  {
    path: PATHS.DEFAULT,
    element: <Layout />,
    children: [
      {
        path: PATHS.LOGIN,
        element: !isLoggedIn ? (
          <Login />
        ) : (
          <Navigate to={PATHS.DASHBOARD} replace />
        ),
      },
      {
        path: PATHS.USER,
        element: (
          // <ProtectedRoute>
          <UserPage />
          // </ProtectedRoute>
        ),
      },
      {
        path: PATHS.DASHBOARD,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: PATHS.TODO,
        element: <TodoPage />,
      },
      {
        path: PATHS.ANY,
        element: (
          <Navigate to={isLoggedIn ? PATHS.DASHBOARD : PATHS.LOGIN} replace />
        ),
      },
      {
        path: PATHS.DEFAULT,
        element: (
          <Navigate to={isLoggedIn ? PATHS.DASHBOARD : PATHS.LOGIN} replace />
        ),
      },
    ],
  },
];
