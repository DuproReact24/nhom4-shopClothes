// src/components/Banner.tsx
import React, { useState, useEffect } from "react";

interface BannerProps {
  images: string[]; // danh sách ảnh banner
  height?: string;  // chiều cao banner (tùy chọn)
  title?: string;   // chữ hiển thị trên banner
}

const Banner: React.FC<BannerProps> = ({ images = "300px", title = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 giây chuyển ảnh
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
        style={{
            width: "100%",               // full width
            height: "400px",             // tăng chiều cao banner
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            borderRadius: 0,
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "background-image 1s ease-in-out",
        }}
        >
        {title}
    </div>
  );
};

export default Banner;
