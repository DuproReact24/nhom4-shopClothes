import React from "react";
import { useAuthStore } from "../store/authStore";
import Footer from "../components/Footer"; 

export default function Home() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Nội dung chính */}
      <div
        style={{
          flex: 1,
          maxWidth: 600,
          margin: "60px auto",
          textAlign: "center",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h1> Welcome to Shop Clothes</h1>

        {user ? (
          <div style={{ marginTop: 20 }}>
            <p style={{ fontSize: "18px" }}>
              Xin chào, <b>{user.email}</b>
            </p>
            <button
              onClick={logout}
              style={{
                marginTop: 12,
                padding: "10px 16px",
                backgroundColor: "#ff4d4f",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Đăng xuất
            </button>
          </div>
        ) : (
          <p style={{ marginTop: 20, fontSize: "16px" }}>
            Vui lòng đăng nhập hoặc đăng ký để tiếp tục.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}
