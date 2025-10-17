import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { CartProvider, useCart } from './contexts/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <NavbarWithCart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

// Wrapper để truyền cartCount vào Navbar
const NavbarWithCart: React.FC = () => {
  const { cartCount } = useCart();
  return <Navbar cartCount={cartCount} />;
};

export default App;
