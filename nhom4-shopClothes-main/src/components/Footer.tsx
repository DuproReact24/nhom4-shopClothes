import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useThemeStore } from "../store/themeStore";
import { motion, AnimatePresence } from "framer-motion";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Thêm FontAwesome icons

interface NewsletterForm {
  email: string;
}

const Footer: React.FC = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const { register, handleSubmit, reset } = useForm<NewsletterForm>();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: NewsletterForm) => {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", data);
      return res.data;
    },
    onSuccess: () => {
      alert("🎉 Cảm ơn bạn đã đăng ký nhận tin!");
      reset();
      queryClient.invalidateQueries({ queryKey: ["newsletter"] });
    },
  });

  const onSubmit = (data: NewsletterForm) => mutation.mutate(data);

  return (
    <AnimatePresence mode="wait">
      <motion.footer
        key={darkMode ? "dark" : "light"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className={`footer ${darkMode ? "dark" : "light"}`}
      >
        <div className="footer-container">
          {/* Brand + Social */}
          <motion.div
            className="footer-section brand"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2>Shop Clothes</h2>
            <p>Cửa hàng thời trang trẻ trung, năng động, mang phong cách hiện đại.</p>

            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" title="Zalo">
                <i className="fas fa-comments"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" title="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-section links"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3>Liên kết nhanh</h3>
            <ul>
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/products">Sản phẩm</Link></li>
              <li><Link to="/cart">Giỏ hàng</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="footer-section newsletter"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Đăng ký nhận tin</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="newsletter-form">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                {...register("email", { required: true })}
              />
              <button type="submit">Đăng ký</button>
            </form>
          </motion.div>

          {/* Settings */}
          <motion.div
            className="footer-section settings"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3>Cài đặt</h3>
            <button onClick={toggleDarkMode} className="toggle-btn">
              {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </motion.div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} <span>Shop Clothes Nhom 4</span>. All rights reserved.
        </div>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer;
