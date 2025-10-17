import React, { useState } from "react";
import { Link } from "react-router-dom";

import shirt1Img from "../assets/shirt1.jpg";
import shirt2Img from "../assets/shirt2.jpg";
import shirt3Img from "../assets/shirt3.jpg";
import pants1Img from "../assets/pants1.jpg";
import panst2Img from "../assets/pants2.jpg";
import panst3Img from "../assets/pants3.jpg";

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
}

const Products: React.FC = () => {
  const [products] = useState<Product[]>([
    { id: 1, title: "Áo thun basic", price: "250.000đ", image: shirt1Img },
    { id: 2, title: "Áo Thun Nam Peanuts Infinite", price: "450.000đ", image: shirt2Img },
    { id: 3, title: "Áo Thun Nam Raglan Peanuts Memories", price: "350.000đ", image: shirt3Img },
    { id: 4, title: "Quần Tây Nam ICONDENIM Urban Slim Crop Trousers", price: "400.000đ", image: pants1Img },
    { id: 5, title: " Quần Jean Nam ICONDENIM Offwhite Baggy", price: "550.000đ", image: panst2Img },
    { id: 6, title: "Quần Short Nam ICONDENIM Stretch Cargo Lite", price: "300.000đ", image: panst3Img },
  ]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Sản phẩm</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center", // căn giữa hàng
          gap: "1rem",             // khoảng cách giữa sản phẩm
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",   // đường viền
              padding: "1rem",
              width: "calc(25% - 1rem)",  // 4 sản phẩm 1 hàng
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img src={p.image} alt={p.title} width={150} style={{ marginBottom: "1rem" }} />
            <h3 style={{ textAlign: "center" }}>{p.title}</h3>
            <p style={{ textAlign: "center" }}>{p.price}</p>
            <Link to={`/products/${p.id}`}>
              <button style={{ marginTop: "0.5rem" }}>Xem chi tiết</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
