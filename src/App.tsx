import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CarouselComponent from "./components/CarouselComponent";
import GioiThieu from "./pages/GioiThieu";
import LienHe from "./pages/LienHe";

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-800 text-white flex justify-center gap-6">
        <Link to="/" className="hover:text-gray-300">Trang chủ</Link>
        <Link to="/gioi-thieu" className="hover:text-gray-300">Giới thiệu</Link>
        <Link to="/lien-he" className="hover:text-gray-300">Liên hệ</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CarouselComponent />} />
        <Route path="/gioi-thieu" element={<GioiThieu />} />
        <Route path="/lien-he" element={<LienHe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
