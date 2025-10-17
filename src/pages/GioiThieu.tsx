export default function GioiThieu() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Banner */}
      <div
        className="relative h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold uppercase tracking-wide">
            Giới thiệu
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12 leading-relaxed">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Về ShopClothes</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            ShopClothes là thương hiệu thời trang hiện đại, mang đến sự kết hợp giữa phong cách,
            chất lượng và giá trị bền vững. Chúng tôi tin rằng thời trang không chỉ là trang phục — 
            đó là cách thể hiện cá tính và cảm hứng sống mỗi ngày.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Giá trị cốt lõi</h3>
            <ul className="text-gray-600 space-y-3">
              <li>💎 <b>Chất lượng:</b> Luôn đảm bảo từng sản phẩm đều đạt tiêu chuẩn tốt nhất.</li>
              <li>🤝 <b>Uy tín:</b> Lấy niềm tin khách hàng làm nền tảng phát triển.</li>
              <li>🌱 <b>Bền vững:</b> Hướng đến thời trang thân thiện với môi trường.</li>
              <li>💡 <b>Đổi mới:</b> Cập nhật xu hướng liên tục để mang đến phong cách mới mẻ.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Tầm nhìn & Mục tiêu</h3>
            <p className="text-gray-600 mb-3">
              ShopClothes hướng đến trở thành thương hiệu thời trang hàng đầu Việt Nam
              trong lĩnh vực bán lẻ trực tuyến, mang đến trải nghiệm mua sắm dễ dàng, nhanh chóng và đáng tin cậy.
            </p>
            <ul className="text-gray-600 space-y-3">
              <li>🚀 Mở rộng mạng lưới cửa hàng và đối tác.</li>
              <li>💬 Xây dựng cộng đồng khách hàng thân thiết.</li>
              <li>🎯 Liên tục cải thiện trải nghiệm người dùng.</li>
            </ul>
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Đội ngũ phát triển</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            ShopClothes ra đời với mong muốn trở thành thương hiệu thời trang trực tuyến đáng tin cậy,
            mang đến sản phẩm chất lượng, dịch vụ tận tâm và phong cách thời trang bắt kịp xu hướng.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Phan Hoàng Phúc", "Trần Minh Anh", "Nguyễn Quốc Bảo"].map((name, i) => (
              <div
                key={i}
                className="border rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h4 className="font-semibold">{name}</h4>
                <p className="text-sm text-gray-500">Thành viên nhóm phát triển</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
