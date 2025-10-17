import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Giỏ hàng của bạn</h2>
        <p>Giỏ hàng của bạn đang trống.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Giỏ hàng của bạn</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        {cartItems.map(item => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            <img src={item.image} alt={item.title} width={100} />
            <span style={{ fontWeight: 'bold', textAlign: 'center' }}>{item.title}</span>
            <span>{item.price}</span>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                marginTop: '0.5rem',
                padding: '0.3rem 0.6rem',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Gỡ bỏ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
