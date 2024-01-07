import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { authSelector } from "../store/api/auth";

export default function ProtectedRoute({ children }) {
  const { token } = useSelector(authSelector, shallowEqual);

  if (!token) {
    return (
      <Navigate to="/login" replace state={{ from: window.location.href }} />
    );
  }

  return children;
}
