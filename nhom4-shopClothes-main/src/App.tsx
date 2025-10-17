import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "16px",
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}>
          Home
        </Link>
        <Link to="/login" style={{ textDecoration: "none", color: "#007bff" }}>
          Login
        </Link>
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "#007bff" }}
        >
          Register
        </Link>
      </nav>

      {/* Main content */}
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <div style={{ textAlign: "center" }}>
                  <h2>Your profile</h2>
                  <p>This route is protected.</p>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
