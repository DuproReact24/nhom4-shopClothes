import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/banner1.jpg",
    title: "Bộ sưu tập mới",
    subtitle: "Thời trang hiện đại cho mùa thu này",
    button: "Khám phá ngay",
  },
  {
    id: 2,
    image: "/banner2.jpg",
    title: "Sale up to 50%",
    subtitle: "Ưu đãi hấp dẫn dành riêng cho bạn",
    button: "Mua ngay",
  },
  {
    id: 3,
    image: "/banner3.jpg",
    title: "Phong cách trẻ trung",
    subtitle: "Cập nhật xu hướng mỗi ngày cùng ShopClothes",
    button: "Xem chi tiết",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Tự động chuyển slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[420px] md:h-[520px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-center px-10 md:px-20">
            <div className="max-w-lg">
              <p className="text-sm md:text-base text-white/80 uppercase tracking-wide mb-2">
                {slide.subtitle}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {slide.title}
              </h2>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm md:text-base transition">
                {slide.button}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
