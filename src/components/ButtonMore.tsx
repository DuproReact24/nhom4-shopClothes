import React from 'react';

interface ButtonMoreProps {
  onClick?: () => void;
}

const ButtonMore: React.FC<ButtonMoreProps> = ({ onClick }) => {
  return (
    <button
        onClick={onClick}
        style={{
            padding: '0.5rem 1.5rem',
            border: '1px solid #000',       // viền giống hình
            backgroundColor: 'transparent',
            color: '#000',
            cursor: 'pointer',
            borderRadius: '4px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            display: 'block',
            margin: '20px auto',            // canh giữa
        }}
        onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#f0f0f0'; // màu nhẹ hơn khi hover
            (e.currentTarget as HTMLButtonElement).style.color = '#000';
        }}
        onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
            (e.currentTarget as HTMLButtonElement).style.color = '#000';
        }}
        >
        Xem Thêm
    </button>

  );
};

export default ButtonMore;
