import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

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
  description: string;
}

const productData: Product[] = [
  { id: 1, title: 'Áo thun basic', price: '250.000đ', image: shirt1Img, description: 'Áo thun cotton thoáng mát, form basic.' },
  { id: 2, title: 'Áo Thun Nam Peanuts Infinite', price: '450.000đ', image: shirt2Img, description: 'Áo Thun Nam Peanuts Infinite.' },
  { id: 3, title: 'Áo Thun Nam Raglan Peanuts Memories', price: '350.000đ', image: shirt3Img, description: 'Hoodie ấm áp, dễ phối đồ.' },
  { id: 4, title: 'Quần Tây Nam ICONDENIM Urban Slim Crop Trousers', price: '350.000đ', image: pants1Img, description: 'Hoodie ấm áp, dễ phối đồ.' },
  { id: 5, title: ' Quần Jean Nam ICONDENIM Offwhite Baggy', price: '350.000đ', image: panst2Img, description: 'Hoodie ấm áp, dễ phối đồ.' },
  { id: 6, title: 'Quần Short Nam ICONDENIM Stretch Cargo Lite', price: '350.000đ', image: panst3Img, description: 'CHẤT LIỆU CO GIÃN LINH HOẠT – THOÁNG MÁT : Vải kaki thun pha Spandex mang lại độ co giãn nhẹ, dễ dàng di chuyển mà vẫn giữ phom. Bề mặt vải mịn, nhẹ, thoáng khí, phù hợp khí hậu nóng ẩm và hoạt động ngoài trời.' },
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = productData.find(p => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return <div>Sản phẩm không tìm thấy</div>;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',       // căn giữa toàn bộ nội dung
        padding: '2rem',
        gap: '1.5rem',              // khoảng cách đều giữa các phần
      }}
    >
      <h2 style={{ textAlign: 'center' }}>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: '250px',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      />
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{product.price}</p>
      <p style={{ textAlign: 'center', maxWidth: '500px' }}>{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          padding: '0.6rem 1.2rem',
          backgroundColor: '##cce5ff',
          color: 'black',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default ProductDetail;
