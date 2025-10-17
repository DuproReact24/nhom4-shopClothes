import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/auth";
import { useAuthStore } from "../store/authStore";

type RegisterForm = {
  name?: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const { register, handleSubmit, reset } = useForm<RegisterForm>();
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  // ✅ Mutation cho TanStack Query v5
  const mutation = useMutation({
    mutationFn: (data: RegisterForm) => registerUser(data),
    onSuccess: (data) => {
      setUser(data);
      reset();
      navigate("/");
    },
    onError: () => {
      alert("❌ Đăng ký thất bại, vui lòng thử lại!");
    },
  });

  const onSubmit = (data: RegisterForm) => mutation.mutate(data);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "60px auto",
        padding: "24px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        📝 Đăng ký tài khoản
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        <label>
          Tên
          <input
            {...register("name")}
            placeholder="Nhập tên của bạn"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label>
          Email
          <input
            {...register("email", { required: "Email là bắt buộc" })}
            placeholder="Nhập email"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label>
          Mật khẩu
          <input
            type="password"
            {...register("password", { required: "Mật khẩu là bắt buộc" })}
            placeholder="Nhập mật khẩu"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <button
          type="submit"
          disabled={mutation.isPending} // ✅ dùng isPending thay vì isLoading
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {mutation.isPending ? "Đang đăng ký..." : "Đăng ký"}
        </button>

        {mutation.isError && (
          <p style={{ color: "red", textAlign: "center" }}>
            ❌ Đăng ký thất bại. Thử lại!
          </p>
        )}

        <p style={{ textAlign: "center" }}>
          Đã có tài khoản?{" "}
          <Link to="/login" style={{ color: "#007bff", textDecoration: "none" }}>
            Đăng nhập
          </Link>
        </p>
      </form>
    </div>
  );
}
