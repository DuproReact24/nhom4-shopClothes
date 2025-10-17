// data/products.ts
import shirt1 from '../assets/shirt1.jpg'

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Áo thun bé trai Basic",
    price: 159000,
    image:
      shirt1,
    description: "Áo thun cotton thoáng mát, họa tiết đơn giản cho bé trai.",
    category: "Bé trai",
  },
  {
    id: "2",
    name: "Váy công chúa bé gái",
    price: 249000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDzKJnwbr6R2QsA9Zy0rCAkHRxnCN4ym7Og&s",
    description: "Váy công chúa lung linh cho bé gái từ 3–8 tuổi.",
    category: "Bé gái",
  },
  // ... các sản phẩm còn lại
];
