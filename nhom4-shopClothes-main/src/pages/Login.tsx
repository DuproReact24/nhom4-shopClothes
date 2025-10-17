import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth"; // 👈 chữ thường (phải trùng tên file)
import { useAuthStore } from "../store/authStore";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data: LoginForm) => login(data),
    onSuccess: (data) => {
      setUser(data);
      navigate("/");
    },
    onError: () => {
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin!");
    },
  });

  const onSubmit = (data: LoginForm) => mutation.mutate(data);

  return (
    <div className="card" style={{ maxWidth: 400, margin: "50px auto", padding: 20 }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Đăng nhập</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="form" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <label>
          Email
          <input
            {...register("email", { required: "Email là bắt buộc" })}
            placeholder="Nhập email"
            style={{ width: "100%", padding: 8 }}
          />
        </label>

        <label>
          Mật khẩu
          <input
            type="password"
            {...register("password", { required: "Mật khẩu là bắt buộc" })}
            placeholder="Nhập mật khẩu"
            style={{ width: "100%", padding: 8 }}
          />
        </label>

        <button
          type="submit"
          disabled={mutation.isPending}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: 4,
            cursor: mutation.isPending ? "not-allowed" : "pointer",
          }}
        >
          {mutation.isPending ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>

        {mutation.isError && (
          <p style={{ color: "red", textAlign: "center" }}>❌ Đăng nhập thất bại</p>
        )}
      </form>
    </div>
  );
}
