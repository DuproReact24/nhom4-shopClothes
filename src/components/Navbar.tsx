import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  return (
    <nav style={{ padding: '1rem', background: '#eee', display: 'flex', justifyContent: 'space-between' }}>
      <div>
      <Link to="/" style={{ marginRight: '1rem' }}>Trang chủ</Link>
      <Link to="/products" style={{ marginLeft: '1rem' }}>Sản phẩm</Link>
    </div>
      <div>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
