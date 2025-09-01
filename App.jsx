import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <nav className="flex gap-4 mb-6">
          <Link to="/" className="text-blue-600 font-bold">Dashboard</Link>
          <Link to="/products" className="text-blue-600 font-bold">Produk</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1 className="text-xl font-bold">Selamat datang di KaryaKaca POS 🚀</h1>} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}
