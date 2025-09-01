import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-extrabold text-center text-sky-600">KARYA • POS & Inventori</h1>
        <p className="text-center text-gray-600 mt-2">Prototype siap online — selanjutnya bisa ditambahkan fitur penjualan, inventori, dan proyek.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-xl">
            <div className="text-sm text-gray-500">Penjualan</div>
            <div className="text-lg font-medium mt-2">Buat invoice & kurangi stok</div>
          </div>
          <div className="p-4 border rounded-xl">
            <div className="text-sm text-gray-500">Inventori</div>
            <div className="text-lg font-medium mt-2">Catat pembelian & stok</div>
          </div>
          <div className="p-4 border rounded-xl">
            <div className="text-sm text-gray-500">Proyek</div>
            <div className="text-lg font-medium mt-2">Estimasi bahan & tagihan</div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">Jika ingin fitur lengkap, beri tahu saya — saya bantu replace App.jsx dengan versi POS lengkap.</div>
      </div>
    </div>
  );
}
