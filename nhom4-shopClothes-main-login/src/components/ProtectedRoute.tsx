import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    // Nếu chưa đăng nhập → điều hướng về trang login
    return <Navigate to="/login" replace />;
  }

  // Nếu đã đăng nhập → hiển thị nội dung bên trong
  return <>{children}</>;
}
