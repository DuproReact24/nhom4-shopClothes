export default function LienHe() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: "url('/banner2.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold uppercase tracking-wide">
            Liên hệ
          </h1>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h2>
          <ul className="text-gray-600 space-y-4">
            <li>📍 300A Nguyễn Tất Thành, Quận 4, TP. Hồ Chí Minh</li>
            <li>📞 0123 456 789</li>
            <li>✉ example@example.com</li>
            <li>🕐 8:00 - 21:00 (Thứ 2 - Chủ nhật)</li>
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Kết nối với chúng tôi</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-indigo-600">🌐</a>
              <a href="#" className="hover:text-pink-500">📸</a>
              <a href="#" className="hover:text-blue-500">💬</a>
            </div>
          </div>
        </div>

        <div className="border rounded-xl shadow p-8">
          <h2 className="text-2xl font-semibold mb-6">Gửi tin nhắn</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <textarea
              rows={4}
              placeholder="Nội dung liên hệ..."
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
            >
              Gửi ngay
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-80 border-t">
        <iframe
          title="ShopClothes Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5630817799125!2d106.70008117577777!3d10.767886859346804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b3c86980d%3A0x3d7cb94d95e9cbea!2zMzAwQSBOZ3V54buFbiBU4bqldCBUaMOhbmgsIFF14bqtbiA0LCBI4buTIENow60gTWluaCBDaXR5!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
